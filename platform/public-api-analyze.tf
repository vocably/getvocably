resource "aws_iam_role" "public_analyze_lambda" {
  name               = "vocably-${terraform.workspace}-public-analyze-lambda"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

resource "aws_iam_policy" "public_analyze_lambda" {
  name = "vocably-${terraform.workspace}-public-analyze-lambda-policy"
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Statement" : [
      {
        "Sid" : "DefaultLogging",
        "Effect" : "Allow",
        "Action" : [
          "logs:CreateLogGroup",
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ],
        "Resource" : "*"
      },
      {
        "Sid" : "UnitsOfSpeechS3",
        "Effect" : "Allow",
        "Action" : [
          "s3:*",
        ],
        "Resource" : [
          aws_s3_bucket.units_of_speech.arn,
          "${aws_s3_bucket.units_of_speech.arn}/*",
        ]
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "public_analyze_lambda" {
  role       = aws_iam_role.public_analyze_lambda.name
  policy_arn = aws_iam_policy.public_analyze_lambda.arn
}

resource "aws_lambda_function" "public_analyze" {
  filename         = data.archive_file.public_backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-public-analyze"
  role             = aws_iam_role.public_analyze_lambda.arn
  handler          = "analyze.analyze"
  source_code_hash = data.archive_file.public_backend_build.output_base64sha256
  runtime          = "nodejs22.x"
  timeout          = 10
}

resource "aws_cloudwatch_log_group" "public_analyze" {
  name              = "/aws/lambda/${aws_lambda_function.public_analyze.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_integration" "public_analyze" {
  api_id = aws_apigatewayv2_api.public_api.id

  integration_uri    = aws_lambda_function.public_analyze.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "public_analyze" {
  api_id = aws_apigatewayv2_api.public_api.id

  route_key = "POST /analyze"
  target    = "integrations/${aws_apigatewayv2_integration.public_analyze.id}"
}

resource "aws_lambda_permission" "public_analyze" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.public_analyze.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.public_api.execution_arn}/*/*"
}

resource "aws_cloudwatch_event_rule" "public_analyze" {
  name                = "vocably-${terraform.workspace}-analyze"
  schedule_expression = "rate(1 minute)"
}

resource "aws_cloudwatch_event_target" "public_analyze" {
  arn  = aws_lambda_function.public_analyze.arn
  rule = aws_cloudwatch_event_rule.public_analyze.name
}

resource "aws_lambda_permission" "allow_cloudwatch_to_call_public_analyze_lambda" {
  statement_id  = "AllowExecutionFromCloudWatch"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.public_analyze.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.public_analyze.arn
}
