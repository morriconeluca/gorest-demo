import { getCurrentUser } from '@/lib/auth/dal';
import { deleteSession } from '@/lib/auth/session';
import Link from 'next/link';
import { LogoutButton } from './_lib/components/logout-button/logout-button';
import t from '@/lib/ui/theme/recipes/typography.styles';
import { Card } from '@/lib/ui/components/card/card';
import button from '@/lib/ui/theme/recipes/button.styles';

export default async function Account() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  return (
    <Card label="Account">
      <h1 className={`${t.heading.medium} mb-6`}>Your account</h1>
      <section className="flex flex-col gap-6 mb-8">
        <p>
          <span className={t.label}>UserId:</span> {user.id}
        </p>
        <p>
          <span className={t.label}>Name:</span> {user.name}
        </p>
        <p>
          <span className={t.label}>Email:</span> {user.email}
        </p>
        <p>
          <span className={t.label}>Gender:</span> {user.gender}
        </p>
        <p>
          <span className={t.label}>Status:</span> {user.status}
        </p>
      </section>
      <div className="flex sm:justify-end gap-4">
        <LogoutButton className="w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0" />
        <Link
          className={`${button.primary} w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0`}
          href="/account/edit"
        >
          Edit
        </Link>
      </div>
    </Card>
  );
}
