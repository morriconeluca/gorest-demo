import 'server-only';

import { GOREST_HEADERS, Post } from '@/lib/services/gorest/gorest.models';
import { EditPost } from './editPost.models';

export const editPost = async ({ body, postId, title }: EditPost) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/posts/${postId}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ title, body }),
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return (await res.json()) as Post;
};
