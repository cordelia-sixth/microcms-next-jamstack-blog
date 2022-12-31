// microCMSへの接続
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'my-next-jamstack-blog',
  apiKey: process.env.API_KEY,
})