'use server';

import { EditPostFormState } from './edit-post-form-models';
import { EditPostFormSchema } from './edit-post-form.schemas';
import { deleteSession } from '@/lib/auth/session';
import { getCurrentUser } from '@/lib/auth/dal';
import { redirect } from 'next/navigation';
import { editPost } from '@/lib/services/gorest/apis/posts/[postId]/PATCH/editPost';

export const editPostFormAction = async (
  postId: number,
  _currentState: EditPostFormState,
  formData: FormData
): Promise<EditPostFormState> => {
  /**
   * The safeParse() method returns the validatedFields variable,
   * which will contain either the successfully parsed data
   * or an error object if validation fails.
   */
  const validatedFields = EditPostFormSchema.safeParse({
    body: formData.get('body'),
    title: formData.get('title'),
  });

  /**
   * If validation fails, the errors are extracted
   * from the validatedFields.error object
   * using the flatten() and fieldErrors methods.
   */
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { body, title } = validatedFields.data;

  try {
    const user = await getCurrentUser();

    if (!user) {
      return await deleteSession();
    }

    await editPost({ body, title, postId });
  } catch (_error) {
    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  redirect('/posts');
};
