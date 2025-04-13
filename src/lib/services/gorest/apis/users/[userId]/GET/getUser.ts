import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';
import { User } from '@/lib/services/gorest/gorest.models';

export const getUser = async (userId: number) =>
  await gorestApi.get(`users/${userId}`).json<User>();
