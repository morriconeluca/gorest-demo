import 'server-only';

import { cache } from 'react';
import { getUser } from '../services/gorest/apis/users/[userId]/GET/getUser';
import { verifySession } from './session';

/**
 * Returns the currently authenticated user.
 * The cache function from 'react' is used to memoize the result,
 * so that it's not called multiple times with the same input.
 */
export const getCurrentUser = cache(async () => {
  const session = await verifySession();

  if (!session) {
    return null;
  }

  try {
    const user = await getUser(Number(session.userId));

    return user;
  } catch (_error) {
    return null;
  }
});
