import 'server-only';

import { GOREST_HEADERS } from '@/lib/services/gorest/gorest.models';

export const deleteUser = async (userId: number) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/users/${userId}`,
    {
      method: 'DELETE',
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return res;
};
