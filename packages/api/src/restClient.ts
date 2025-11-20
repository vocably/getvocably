import { Result } from '@vocably/model';
import { request as httpRequest } from '@vocably/model-operations';
import { merge } from 'lodash-es';
import { apiOptions } from './config';

export const request = async (
  url: string,
  init: RequestInit
): Promise<Result<any>> => {
  const headers = {
    Authorization: `Bearer ${await apiOptions.getJwtToken()}`,
  };
  return httpRequest(
    apiOptions.baseUrl + url,
    merge(init, {
      headers,
    })
  );
};
