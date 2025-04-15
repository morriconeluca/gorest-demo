'use client';

import { useActionState } from 'react';
import { editUserFormAction } from './edit-user-form.actions';
import { User } from '@/lib/services/gorest/gorest.models';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/lib/ui/components/input/input';
import t from '@/lib/ui/theme/recipes/typography.styles';
import button from '@/lib/ui/theme/recipes/button.styles';

export const EditUserForm = ({ user }: { user: User }) => {
  const editUserFormActionWithUserId = editUserFormAction.bind(null, user.id);

  const [state, action, pending] = useActionState(
    editUserFormActionWithUserId,
    undefined
  );

  return (
    <form action={action}>
      <Input
        autoFocus
        defaultValue={user.name}
        error={state?.errors?.name?.[0]}
        id="name"
        label="Name"
        name="name"
        placeholder="John Doe"
        type="text"
      />
      <Input
        defaultValue={user.email}
        error={state?.errors?.email?.[0]}
        id="email"
        label="Email"
        name="email"
        placeholder="john@example.com"
        type="email"
      />

      <p className="mb-8">
        <label className="mb-1">
          <span className={`${t.label} mb-1`}>Gender</span>
          <select
            aria-describedby="gender-error"
            aria-invalid={!!state?.errors?.gender}
            id="gender"
            name="gender"
            defaultValue={user.gender}
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
      <div className="flex sm:justify-end gap-4 mb-8">
        <Link
          className={`${button.tertiary} w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0`}
          href="/account"
        >
          Cancel
        </Link>
        <button
          className={`${button.primary} w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0`}
          disabled={pending}
          type="submit"
        >
          {pending ? 'Saving...' : 'Save'}
        </button>
      </div>
      {state?.message && (
        <p className="text-error mb-8" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
};
