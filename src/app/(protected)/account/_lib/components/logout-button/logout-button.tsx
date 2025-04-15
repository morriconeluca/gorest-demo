'use client';

import { useActionState } from 'react';
import { logoutButtonAction } from './logout-button.actions';
import { TLogoutButton } from './logout-button.models';
import button from '@/lib/ui/theme/recipes/button.styles';

export const LogoutButton = (props: TLogoutButton) => {
  const [state, action, pending] = useActionState(
    logoutButtonAction,
    undefined
  );

  return (
    <form {...props} action={action}>
      <button className={button.tertiary} type="submit" disabled={pending}>
        {pending ? 'Disconnecting...' : 'Logout'}
      </button>
      {state?.message && (
        <p className="text-error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
};
