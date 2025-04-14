'use client';

import { useActionState } from 'react';
import { editUserFormAction } from './edit-user-form.actions';
import { User } from '@/lib/services/gorest/gorest.models';
import Link from 'next/link';

export const EditUserForm = ({ user }: { user: User }) => {
  const editUserFormActionWithUserId = editUserFormAction.bind(null, user.id);

  const [state, action, pending] = useActionState(
    editUserFormActionWithUserId,
    undefined
  );

  return (
    <form action={action}>
      <div>
        <input
          id="name"
          name="name"
          placeholder="John Doe"
          defaultValue={user.name}
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state.errors.name}</p>
        )}
      </div>

      <div>
        <input
          id="email"
          name="email"
          placeholder="john@example.com"
          defaultValue={user.email}
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      <div>
        <select id="gender" name="gender" defaultValue={user.gender}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        {state?.errors?.gender && (
          <p className="text-sm text-red-500">{state.errors.gender}</p>
        )}
      </div>

      <Link href="/account">Cancel</Link>

      <button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Save'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
