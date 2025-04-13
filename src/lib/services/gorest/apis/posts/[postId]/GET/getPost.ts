import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';
import { Post } from '@/lib/services/gorest/gorest.models';

export const getPost = async (postId: number) =>
  await gorestApi.get(`posts/${postId}`).json<Post>();
