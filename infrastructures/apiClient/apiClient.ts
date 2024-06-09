import createClient from 'openapi-fetch';
import type { paths } from './api';

export const { GET, POST, PUT, DELETE, HEAD, PATCH } = createClient<paths>({
  baseUrl: 'https://api.spacetraders.io',
});
