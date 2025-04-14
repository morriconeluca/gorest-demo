import 'server-only';

import { GOREST_HEADERS, Post } from '@/lib/services/gorest/gorest.models';

export const getPosts = async (userId: number) => {
  const res = await fetch(
    `${process.env.GOREST_API_PREFIX_URL}/users/${userId}/posts`,
    {
      headers: GOREST_HEADERS,
    }
  );

  if (!res.ok) {
    throw res;
  }

  return (await res.json()) as Post[];
};
