import 'server-only';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { decrypt, encrypt } from './jwt';

export async function createSession(userId: number) {
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });

  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  });

  redirect('/posts');
}

export const verifySession = async () => {
  const cookie = (await cookies()).get('session')?.value;
  const session = await decrypt(cookie);

  if (!session?.userId) {
    redirect('/sign-in');
  }

  return { isAuth: true, userId: Number(session.userId) };
};

export const updateSession = async () => {
  const session = (await cookies()).get('session')?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return null;
  }

  const expires = new Date(Date.now() + 60 * 60 * 1000);
  (await cookies()).set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expires,
    sameSite: 'lax',
    path: '/',
  });
};

export const deleteSession = async () => {
  (await cookies()).delete('session');
  redirect('/sign-in');
};
