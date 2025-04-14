import { deleteSession } from '@/lib/auth/session';
import { getCurrentUser } from '@/lib/auth/dal';
import { EditUserForm } from './_lib/components/edit-user-form/edit-user-form';
import Link from 'next/link';

export default async function EditAccount() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  return (
    <>
      <Link href="/posts">Back to posts</Link>
      <h1>Account {user.id}</h1>
      <EditUserForm user={user} />
    </>
  );
}
