import 'server-only';

import { gorestApi } from '@/lib/services/gorest/gorest';
import { Post } from '@/lib/services/gorest/gorest.models';
import { EditPost } from './editPost.models';

export const editPost = async ({ body, postId, title }: EditPost) =>
  await gorestApi
    .patch(`posts/${postId}`, { body: JSON.stringify({ title, body }) })
    .json<Post>();
