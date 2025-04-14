'use server';

import { createUser } from '@/lib/services/gorest/apis/users/[userId]/POST/createUser';
import { SignUpFormState } from './sign-up-form-models';
import { SignUpFormSchema } from './sign-up-form.schemas';
import { createSession } from '@/lib/auth/session';
import { CreateUserError } from '@/lib/services/gorest/apis/users/[userId]/POST/createUser.models';
import { User } from '@/lib/services/gorest/gorest.models';

export const signUpFormAction = async (
  _currentState: SignUpFormState,
  formData: FormData
): Promise<SignUpFormState> => {
  /**
   * The safeParse() method returns the validatedFields variable,
   * which will contain either the successfully parsed data
   * or an error object if validation fails.
   */
  const validatedFields = SignUpFormSchema.safeParse({
    email: formData.get('email'),
    gender: formData.get('gender'),
    name: formData.get('name'),
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

  const { email, gender, name } = validatedFields.data;

  let user: User;

  try {
    user = await createUser({ email, gender, name });
  } catch (error: unknown) {
    if ((error as CreateUserError)?.status === 422) {
      const errorResponse = await (error as CreateUserError).json();
      return {
        message: `Sorry, ${errorResponse?.[0]?.field} ${errorResponse?.[0]?.message}.`,
      };
    }

    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  if (user?.id) {
    await createSession(user.id);
  }
};
