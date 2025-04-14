'use client';

import { useActionState } from 'react';
import { deletePostButtonAction } from './delete-post-button.actions';

export const DeletePostButton = ({ postId }: { postId: number }) => {
  const deletePostButtonActionWithPostId = deletePostButtonAction.bind(
    null,
    postId
  );
  const [state, action, pending] = useActionState(
    deletePostButtonActionWithPostId,
    undefined
  );

  return (
    <form action={action}>
      <button type="submit" disabled={pending}>
        {pending ? 'Deleting...' : 'Delete'}
      </button>
      {state?.message && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};
