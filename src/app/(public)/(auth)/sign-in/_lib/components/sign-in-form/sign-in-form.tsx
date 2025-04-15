'use client';

import { useActionState } from 'react';
import { signInFormAction } from './sign-in-form.actions';
import button from '@/lib/ui/theme/recipes/button.styles';

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

      <p className="sm:flex sm:justify-end mb-8">
        <button
          className={`${button.primary} sm:max-w-[calc((100%-1rem)/2)]`}
          disabled={pending}
          type="submit"
        >
          {pending ? 'Signing In...' : 'Sign In'}
        </button>
      </p>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
