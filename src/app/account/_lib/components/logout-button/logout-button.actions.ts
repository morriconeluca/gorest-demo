'use server';

import { LogoutButtonState } from './logout-button.models';
import { deleteSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';

export const logoutButtonAction = async (): Promise<LogoutButtonState> => {
  try {
    await deleteSession();
  } catch (_error) {
    return {
      message: 'Something went wrong. Please try again.',
    };
  }

  redirect('/sign-in');
};
