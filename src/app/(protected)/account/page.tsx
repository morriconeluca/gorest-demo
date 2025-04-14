import { getCurrentUser } from '@/lib/auth/dal';
import { deleteSession } from '@/lib/auth/session';
import Link from 'next/link';
import { LogoutButton } from './_lib/components/logout-button/logout-button';

export default async function Account() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  return (
    <>
      <Link href="/posts">Back to posts</Link>
      <h1>Account</h1>
      <p>UserId: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Status: {user.status}</p>
      <LogoutButton />
      <Link href="/account/edit">Edit</Link>
    </>
  );
}
