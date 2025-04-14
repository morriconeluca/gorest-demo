import 'server-only';

import { GOREST_HEADERS } from '@/lib/services/gorest/gorest.models';

export const deletePost = async (postId: number) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/posts/${postId}`,
    {
      method: 'DELETE',
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return res;
};
