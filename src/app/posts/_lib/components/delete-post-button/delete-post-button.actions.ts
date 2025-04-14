'use server';

import { revalidatePath } from 'next/cache';
import { DeletePostButtonState } from './delete-post-button.models';
import { deletePost } from '@/lib/services/gorest/apis/posts/[postId]/DELETE/deletePost';

export const deletePostButtonAction = async (
  postId: number
): Promise<DeletePostButtonState> => {
  try {
    await deletePost(postId);
  } catch (_error) {
    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  revalidatePath('/posts');
};
