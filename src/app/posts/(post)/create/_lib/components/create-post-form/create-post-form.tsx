'use client';

import { useActionState } from 'react';
import { createPostFormAction } from './create-post-form.actions';

export const CreatePostForm = () => {
  const [state, action, pending] = useActionState(
    createPostFormAction,
    undefined
  );

  return (
    <form action={action}>
      <div>
        <input id="title" name="title" placeholder="Your title" />
        {state?.errors?.title && (
          <p className="text-sm text-red-500">{state.errors.title}</p>
        )}
      </div>

      <div>
        <textarea id="body" name="body" placeholder="The post text body" />
        {state?.errors?.body && (
          <p className="text-sm text-red-500">{state.errors.body}</p>
        )}
      </div>

      <button type="submit" disabled={pending}>
        {pending ? 'Creating...' : 'Create'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
