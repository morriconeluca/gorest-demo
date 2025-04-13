import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';
import { Post } from '@/lib/services/gorest/gorest.models';

export const getPosts = async (userId: number) =>
  await gorestApi.get(`users/${userId}/posts`).json<Post>();
