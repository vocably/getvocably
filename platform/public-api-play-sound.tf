resource "aws_iam_role" "public_play_sound_lambda_execution" {
  name               = "vocably-${terraform.workspace}-public-play-sound-lambda-execution"
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

resource "aws_iam_policy" "public_play_sound_lambda_execution" {
  name = "vocably-${terraform.workspace}-public-play-sound-lambda-execution-policy"
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
        "Sid" : "PollyAccess",
        "Effect" : "Allow",
        "Action" : [
          "polly:SynthesizeSpeech",
        ],
        "Resource" : "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "public_play_sound_lambda_execution" {
  role       = aws_iam_role.public_play_sound_lambda_execution.name
  policy_arn = aws_iam_policy.public_play_sound_lambda_execution.arn
}

resource "aws_lambda_function" "public_play_sound" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-public_play_sound"
  role             = aws_iam_role.public_play_sound_lambda_execution.arn
  handler          = "play-sound.playSound"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs22.x"
}

resource "aws_cloudwatch_log_group" "public_play_sound" {
  name              = "/aws/lambda/${aws_lambda_function.public_play_sound.function_name}"
  retention_in_days = 14
}

resource "aws_apigatewayv2_integration" "public_play_sound" {
  api_id = aws_apigatewayv2_api.public_api.id

  integration_uri    = aws_lambda_function.public_play_sound.invoke_arn
  integration_type   = "AWS_PROXY"
  integration_method = "POST"
}

resource "aws_apigatewayv2_route" "public_play_sound" {
  api_id = aws_apigatewayv2_api.public_api.id

  route_key = "GET /audio"
  target    = "integrations/${aws_apigatewayv2_integration.public_play_sound.id}"
}

resource "aws_lambda_permission" "public_play_sound" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.public_play_sound.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_apigatewayv2_api.public_api.execution_arn}/*/*"
}
