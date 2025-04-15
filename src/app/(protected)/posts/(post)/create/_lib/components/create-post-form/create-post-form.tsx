'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { createPostFormAction } from './create-post-form.actions';
import button from '@/lib/ui/theme/recipes/button.styles';
import { Input } from '@/lib/ui/components/input/input';
import { Textarea } from '@/lib/ui/components/textarea/textarea';

export const CreatePostForm = () => {
  const [state, action, pending] = useActionState(
    createPostFormAction,
    undefined
  );

  return (
    <form action={action}>
      <Input
        autoFocus
        error={state?.errors?.title?.[0]}
        id="title"
        label="Title"
        name="title"
        placeholder="The post title"
        type="text"
      />
      <Textarea
        error={state?.errors?.body?.[0]}
        id="body"
        label="Body"
        name="body"
        placeholder="The post text body"
      />
      <div className="flex sm:justify-end gap-4 mb-8">
        <Link
          className={`${button.tertiary} w-[calc((100%-1rem)/2)]! sm:w-[calc((100%-3rem)/4)]! grow-0`}
          href="/posts"
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
