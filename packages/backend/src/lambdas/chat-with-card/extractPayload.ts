import {
  ChatWithCardPayload,
  isChatWithCardPayload,
  Result,
} from '@vocably/model';
import { APIGatewayProxyEvent } from 'aws-lambda';

export const extractPayload = (
  event: APIGatewayProxyEvent
): Result<ChatWithCardPayload> => {
  try {
    const payload = JSON.parse(event.body ?? '{}');

    if (!isChatWithCardPayload(payload)) {
      return {
        success: false,
        errorCode: 'FUCKING_ERROR',
        reason: 'The chat-with-card payload is not valid.',
        extra: payload,
      };
    }

    return {
      success: true,
      value: payload,
    };
  } catch (e) {
    return {
      success: false,
      errorCode: 'FUCKING_ERROR',
      reason: 'Unable to parse payload.',
      extra: e,
    };
  }
};
