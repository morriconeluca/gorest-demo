import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';

export const deleteUser = async (userId: number) =>
  await gorestApi.delete(`users/${userId}`);
