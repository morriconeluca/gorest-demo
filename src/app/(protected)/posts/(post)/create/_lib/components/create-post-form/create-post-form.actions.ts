'use server';

import { CreatePostFormState } from './create-post-form-models';
import { CreatePostFormSchema } from './create-post-form.schemas';
import { deleteSession } from '@/lib/auth/session';
import { createPost } from '@/lib/services/gorest/apis/users/[userId]/posts/POST/createPost';
import { getCurrentUser } from '@/lib/auth/dal';
import { redirect } from 'next/navigation';

export const createPostFormAction = async (
  _currentState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  /**
   * The safeParse() method returns the validatedFields variable,
   * which will contain either the successfully parsed data
   * or an error object if validation fails.
   */
  const validatedFields = CreatePostFormSchema.safeParse({
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

    await createPost({ body, title, userId: user.id });
  } catch (_error) {
    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  redirect('/posts');
};
