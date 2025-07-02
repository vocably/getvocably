resource "aws_iam_role" "revenue_cat_webhook_lambda" {
  name               = "vocably-${terraform.workspace}-revenue-cat-webhook-lambda"
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

resource "aws_iam_policy" "revenue_cat_webhook_logs" {
  name = "vocably-${terraform.workspace}-revenue-cat-webhook-lambda-logs-policy"
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
        "Sid" : "Cognito",
        "Effect" : "Allow",
        "Action" : [
          "cognito-idp:ListUsers",
        ],
        "Resource" : "*"
      },
      {
        "Sid" : "S3StaticUserFiles",
        "Effect" : "Allow",
        "Action" : [
          "s3:*",
        ],
        "Resource" : [
          aws_s3_bucket.user_static_files.arn,
          "${aws_s3_bucket.user_static_files.arn}/*",
        ]
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "revenue_cat_webhook_lambda_logging" {
  role       = aws_iam_role.revenue_cat_webhook_lambda.name
  policy_arn = aws_iam_policy.revenue_cat_webhook_logs.arn
}

resource "aws_lambda_function" "revenue_cat_webhook" {
  filename         = data.archive_file.www_backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-revenue-cat-webhook"
  role             = aws_iam_role.revenue_cat_webhook_lambda.arn
  handler          = "revenueCatWebhook.revenueCatWebhook"
  source_code_hash = data.archive_file.www_backend_build.output_base64sha256
  runtime          = "nodejs18.x"
  timeout          = 10
}

resource "aws_cloudwatch_log_group" "revenue_cat_webhook" {
  name              = "/aws/lambda/${aws_lambda_function.revenue_cat_webhook.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_integration" "revenue_cat_webhook" {
  api_id = aws_apigatewayv2_api.www_api.id

  integration_uri    = aws_lambda_function.revenue_cat_webhook.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "revenue_cat_webhook" {
  api_id = aws_apigatewayv2_api.www_api.id

  route_key = "POST /revenue-cat"
  target    = "integrations/${aws_apigatewayv2_integration.revenue_cat_webhook.id}"
}

resource "aws_lambda_permission" "revenue_cat_webook" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.revenue_cat_webhook.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.www_api.execution_arn}/*/*"
}
