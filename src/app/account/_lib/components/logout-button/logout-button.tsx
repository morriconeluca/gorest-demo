'use client';

import { useActionState } from 'react';
import { logoutButtonAction } from './logout-button.actions';

export const LogoutButton = () => {
  const [state, action, pending] = useActionState(
    logoutButtonAction,
    undefined
  );

  return (
    <form action={action}>
      <button type="submit" disabled={pending}>
        {pending ? 'Disconnecting...' : 'Logout'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
