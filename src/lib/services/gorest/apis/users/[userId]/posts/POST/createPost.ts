import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';
import { Post } from '@/lib/services/gorest/gorest.models';
import { CreatePost } from './createPost.models';

export const createPost = async ({ body, userId, title }: CreatePost) =>
  await gorestApi
    .post(`users/${userId}/posts`, { body: JSON.stringify({ title, body }) })
    .json<Post>();
