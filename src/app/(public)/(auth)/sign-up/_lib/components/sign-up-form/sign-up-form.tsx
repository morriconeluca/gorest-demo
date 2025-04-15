'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import { Input } from '@/lib/ui/components/input/input';
import button from '@/lib/ui/theme/recipes/button.styles';
import { signUpFormAction } from './sign-up-form.actions';
import t from '@/lib/ui/theme/recipes/typography.styles';

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
        error={state?.errors?.email?.[0]}
        id="email"
        label="Email"
        name="email"
        placeholder="john@example.com"
        type="email"
      />

      <p>
        <label className="mb-1">
          <span className={`${t.label} mb-1`}>Gender</span>
          <select
            aria-describedby="gender-error"
            aria-invalid={!!state?.errors?.gender}
            id="gender"
            name="gender"
          >
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </label>
        <span
          aria-live="polite"
          className={`${t.error} flex items-center gap-1`}
          id="gender-error"
        >
          {state?.errors?.gender && (
            <>
              <Image
                alt="error"
                aria-hidden="true"
                height={16}
                src="/interface/circle-exclamation.svg"
                width={16}
              />
              {state.errors.gender}
            </>
          )}
        </span>
      </p>

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
