'use client';

import { useActionState } from 'react';
import { signInFormAction } from './sign-in-form.actions';
import button from '@/lib/ui/theme/recipes/button.styles';
import { Input } from '@/lib/ui/components/atoms/input/input';

export const SignInForm = () => {
  const [state, action, pending] = useActionState(signInFormAction, undefined);

  return (
    <form action={action}>
      <Input
        autoFocus
        error={state?.errors?.userId?.[0]}
        id="userId"
        label="User ID"
        name="userId"
        placeholder="7830117"
        type="text"
      />
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
        <p className="text-error mb-8" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
};
