'use client';

import { useActionState } from 'react';
import { signInFormAction } from './sign-in-form.actions';

export const SignInForm = () => {
  const [state, action, pending] = useActionState(signInFormAction, undefined);

  return (
    <form action={action}>
      <div>
        <input id="userId" name="userId" placeholder="7830117" />
        {state?.errors?.userId && (
          <p className="text-sm text-red-500">{state.errors.userId}</p>
        )}
      </div>

      <button type="submit" disabled={pending}>
        {pending ? 'Signing In...' : 'Sign In'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
