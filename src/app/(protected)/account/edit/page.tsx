import { deleteSession } from '@/lib/auth/session';
import { getCurrentUser } from '@/lib/auth/dal';
import { EditUserForm } from './_lib/components/edit-user-form/edit-user-form';
import { Card } from '@/lib/ui/components/card/card';
import t from '@/lib/ui/theme/recipes/typography.styles';

export default async function EditAccount() {
  const user = await getCurrentUser();

  if (!user) {
    return await deleteSession();
  }

  return (
    <Card label="Edit Account">
      <h1 className={`${t.heading.medium} mb-6`}>Account {user.id}</h1>
      <EditUserForm user={user} />
    </Card>
  );
}
