resource "aws_lambda_function" "chat_with_card" {
  filename         = data.archive_file.backend_build.output_path
  function_name    = "vocably-${terraform.workspace}-chat-with-card"
  role             = aws_iam_role.lambda_execution.arn
  handler          = "chat-with-card.chatWithCard"
  source_code_hash = data.archive_file.backend_build.output_base64sha256
  runtime          = "nodejs22.x"
  timeout          = 10
}

resource "aws_lambda_permission" "chat_with_card" {
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.chat_with_card.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.rest_api.execution_arn}/*/*/*"
}

resource "aws_cloudwatch_log_group" "chat_with_card" {
  name              = "/aws/lambda/${aws_lambda_function.chat_with_card.function_name}"
  retention_in_days = 14
}

resource "aws_api_gateway_resource" "chat_with_card" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  parent_id   = aws_api_gateway_rest_api.rest_api.root_resource_id
  path_part   = "chat-with-card"
}

resource "aws_api_gateway_method" "chat_with_card" {
  rest_api_id   = aws_api_gateway_rest_api.rest_api.id
  resource_id   = aws_api_gateway_resource.chat_with_card.id
  http_method   = "POST"
  authorization = "COGNITO_USER_POOLS"
  authorizer_id = aws_api_gateway_authorizer.rest_api_cognito.id
}

module "chat_with_card_cors" {
  source  = "squidfunk/api-gateway-enable-cors/aws"
  version = "0.3.3"

  api_id          = aws_api_gateway_rest_api.rest_api.id
  api_resource_id = aws_api_gateway_method.chat_with_card.resource_id
}

resource "aws_api_gateway_integration" "chat_with_card" {
  rest_api_id = aws_api_gateway_rest_api.rest_api.id
  resource_id = aws_api_gateway_method.chat_with_card.resource_id
  http_method = aws_api_gateway_method.chat_with_card.http_method

  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.chat_with_card.invoke_arn
  passthrough_behavior    = "WHEN_NO_MATCH"
}

