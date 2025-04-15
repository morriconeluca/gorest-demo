'use client';

import { useActionState } from 'react';
import { editPostFormAction } from './edit-post-form.actions';
import { Post } from '@/lib/services/gorest/gorest.models';
import Link from 'next/link';
import { Input } from '@/lib/ui/components/input/input';
import { Textarea } from '@/lib/ui/components/textarea/textarea';
import button from '@/lib/ui/theme/recipes/button.styles';

export const EditPostForm = ({ post }: { post: Post }) => {
  const editPostFormActionWithPostId = editPostFormAction.bind(null, post.id);

  const [state, action, pending] = useActionState(
    editPostFormActionWithPostId,
    undefined
  );

  return (
    <form action={action}>
      <Input
        autoFocus
        defaultValue={post.title}
        error={state?.errors?.title?.[0]}
        id="title"
        label="Title"
        name="title"
        placeholder="The post title"
        type="text"
      />
      <Textarea
        defaultValue={post.body}
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
