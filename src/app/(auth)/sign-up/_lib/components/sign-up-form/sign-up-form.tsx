'use client';

import { useActionState } from 'react';
import { signUpFormAction } from './sign-up-form.actions';

export const SignUpForm = () => {
  const [state, action, pending] = useActionState(signUpFormAction, undefined);

  return (
    <form action={action}>
      <div>
        <input id="name" name="name" placeholder="John Doe" />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name}</p>
        )}
      </div>

      <div>
        <input id="email" name="email" placeholder="john@example.com" />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      <div>
        <select id="gender" name="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        {state?.errors?.gender && (
          <p className="text-sm text-red-500">{state.errors.gender}</p>
        )}
      </div>

      <button type="submit" disabled={pending}>
        {pending ? 'Signing up...' : 'Sign up'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
