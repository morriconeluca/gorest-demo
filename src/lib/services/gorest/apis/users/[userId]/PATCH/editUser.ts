import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';
import { User } from '@/lib/services/gorest/gorest.models';
import { EditUser } from './editUser.models';

export const editUser = async ({ email, gender, name, userId }: EditUser) =>
  await gorestApi
    .patch(`users/${userId}`, { body: JSON.stringify({ email, gender, name }) })
    .json<User>();
