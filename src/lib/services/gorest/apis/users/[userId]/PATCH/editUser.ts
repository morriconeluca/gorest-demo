import 'server-only';

import { GOREST_HEADERS, User } from '@/lib/services/gorest/gorest.models';
import { EditUser } from './editUser.models';

export const editUser = async ({ email, gender, name, userId }: EditUser) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/users/${userId}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ email, gender, name }),
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return (await res.json()) as User;
};
