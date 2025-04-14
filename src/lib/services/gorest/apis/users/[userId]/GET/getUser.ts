import 'server-only';

import { GOREST_HEADERS, User } from '@/lib/services/gorest/gorest.models';

export const getUser = async (userId: number) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/users/${userId}`,
    {
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return (await res.json()) as User;
};
