'use client';

import { useActionState } from 'react';
import { editPostFormAction } from './edit-post-form.actions';
import { Post } from '@/lib/services/gorest/gorest.models';
import Link from 'next/link';

export const EditPostForm = ({ post }: { post: Post }) => {
  const editPostFormActionWithPostId = editPostFormAction.bind(null, post.id);

  const [state, action, pending] = useActionState(
    editPostFormActionWithPostId,
    undefined
  );

  return (
    <form action={action}>
      <div>
        <input
          id="title"
          name="title"
          placeholder="Your title"
          defaultValue={post.title}
        />
        {state?.errors?.title && (
          <p className="text-sm text-red-500">{state.errors.title}</p>
        )}
      </div>

      <div>
        <textarea
          id="body"
          name="body"
          placeholder="The post text body"
          defaultValue={post.body}
        />
        {state?.errors?.body && (
          <p className="text-sm text-red-500">{state.errors.body}</p>
        )}
      </div>

      <Link href={`/posts`}>Cancel</Link>

      <button type="submit" disabled={pending}>
        {pending ? 'Saving...' : 'Save'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
