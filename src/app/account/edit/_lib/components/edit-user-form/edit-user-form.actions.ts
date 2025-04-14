'use server';

import { EditUserFormState } from './edit-user-form-models';
import { redirect } from 'next/navigation';
import { EditUserError } from '@/lib/services/gorest/apis/users/[userId]/PATCH/editUser.models';
import { editUser } from '@/lib/services/gorest/apis/users/[userId]/PATCH/editUser';
import { EditUserFormSchema } from './edit-user-form.schemas';

export const editUserFormAction = async (
  userId: number,
  _currentState: EditUserFormState,
  formData: FormData
): Promise<EditUserFormState> => {
  /**
   * The safeParse() method returns the validatedFields variable,
   * which will contain either the successfully parsed data
   * or an error object if validation fails.
   */
  const validatedFields = EditUserFormSchema.safeParse({
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

  try {
    await editUser({ email, gender, name, userId });
  } catch (error: unknown) {
    if ((error as EditUserError)?.status === 422) {
      const errorResponse = await (error as EditUserError).json();
      return {
        message: `Sorry, ${errorResponse?.[0]?.field} ${errorResponse?.[0]?.message}.`,
      };
    }

    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  redirect('/account');
};
