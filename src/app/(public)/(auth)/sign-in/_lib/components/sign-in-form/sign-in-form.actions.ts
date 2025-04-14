'use server';

import { SignInFormState } from './sign-in-form-models';
import { SignInFormSchema } from './sign-in-form.schemas';
import { createSession } from '@/lib/auth/session';
import { User } from '@/lib/services/gorest/gorest.models';
import { getUser } from '@/lib/services/gorest/apis/users/[userId]/GET/getUser';

export const signInFormAction = async (
  _currentState: SignInFormState,
  formData: FormData
): Promise<SignInFormState> => {
  /**
   * The safeParse() method returns the validatedFields variable,
   * which will contain either the successfully parsed data
   * or an error object if validation fails.
   */
  const validatedFields = SignInFormSchema.safeParse({
    userId: formData.get('userId'),
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

  const { userId } = validatedFields.data;

  let user: User;

  try {
    user = await getUser(Number(userId));
  } catch (_error) {
    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  if (!user?.id || userId !== String(user.id)) {
    return { message: 'Invalid login credentials.' };
  }

  await createSession(user.id);
};
