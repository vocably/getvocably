import { Environment, Paddle } from '@paddle/paddle-node-sdk';

export const paddle = new Paddle(process.env.PADDLE_API_KEY, {
  environment: process.env.PADDLE_API_KEY.startsWith('pdl_sdbx')
    ? Environment.sandbox
    : Environment.production,
});

// export const createPortalSession = async (
//   customerId: string
// ): Promise<Result<CustomerPortalSession>> => {
//   return resultify(paddle.customerPortalSessions.create(customerId, []), {
//     errorCode: 'FUCKING_ERROR',
//     reason: 'Exception while creating the portal session',
//   });
// };
