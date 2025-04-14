import 'server-only';

import { GOREST_HEADERS, User } from '@/lib/services/gorest/gorest.models';
import { CreateUser } from './createUser.models';

export const createUser = async ({ email, gender, name }: CreateUser) => {
  const res = await fetch(`${process.env.GOREST_API_PREFIX_URL}/users`, {
    method: 'POST',
    body: JSON.stringify({ email, gender, name, status: 'active' }),
    headers: GOREST_HEADERS,
  });

  if (!res.ok) {
    throw res;
  }

  return (await res.json()) as User;
};
