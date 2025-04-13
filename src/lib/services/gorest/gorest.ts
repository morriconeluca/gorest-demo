import 'server-only';
import ky from 'ky';

export const gorestApi = ky.create({
  prefixUrl: process.env.GOREST_API_PREFIX_URL,
  headers: {
    Authorization: `Bearer ${process.env.GOREST_API_KEY}`,
    'Content-Type': 'application/json',
  },
});
