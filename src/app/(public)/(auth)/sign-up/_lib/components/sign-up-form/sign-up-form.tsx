'use client';

import { useActionState } from 'react';
import { signUpFormAction } from './sign-up-form.actions';
import { Input } from '@/lib/ui/components/input/input';
import button from '@/lib/ui/theme/recipes/button.styles';

export const SignUpForm = () => {
  const [state, action, pending] = useActionState(signUpFormAction, undefined);

  return (
    <form action={action}>
      <Input
        autoFocus
        error={state?.errors?.name?.[0]}
        id="name"
        label="Name"
        name="name"
        placeholder="John Doe"
        type="text"
      />
      <Input
        autoFocus
        error={state?.errors?.email?.[0]}
        id="email"
        label="Email"
        name="email"
        placeholder="john@example.com"
        type="email"
      />

      <div>
        <select id="gender" name="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        {state?.errors?.gender && (
          <p className="text-sm text-red-500">{state.errors.gender}</p>
        )}
      </div>

      <p className="sm:flex sm:justify-end mb-8">
        <button
          className={`${button.primary} sm:max-w-[calc((100%-1rem)/2)]`}
          disabled={pending}
          type="submit"
        >
          {pending ? 'Signing up...' : 'Sign up'}
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
