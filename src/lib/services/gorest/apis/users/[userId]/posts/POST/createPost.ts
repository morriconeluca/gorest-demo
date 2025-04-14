import 'server-only';

import { GOREST_HEADERS, Post } from '@/lib/services/gorest/gorest.models';
import { CreatePost } from './createPost.models';

export const createPost = async ({ body, userId, title }: CreatePost) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/users/${userId}/posts`,
    {
      method: 'POST',
      body: JSON.stringify({ title, body }),
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return (await res.json()) as Post;
};
