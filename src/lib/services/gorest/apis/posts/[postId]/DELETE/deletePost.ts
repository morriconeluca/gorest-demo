import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';

export const deletePost = async (postId: number) =>
  await gorestApi.delete(`posts/${postId}`);
