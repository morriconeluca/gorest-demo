'use client';

import { useActionState } from 'react';
import button from '@/lib/ui/theme/recipes/button.styles';
import { deletePostButtonAction } from './delete-post-button.actions';
import { TDeletePostButton } from './delete-post-button.models';

export const DeletePostButton = ({ postId, ...rest }: TDeletePostButton) => {
  const deletePostButtonActionWithPostId = deletePostButtonAction.bind(
    null,
    postId
  );
  const [state, action, pending] = useActionState(
    deletePostButtonActionWithPostId,
    undefined
  );

  return (
    <form {...rest} action={action}>
      <button className={button.secondary} type="submit" disabled={pending}>
        {pending ? 'Deleting...' : 'Delete'}
      </button>
      {state?.message && (
        <p className="text-error" role="alert">
          {state.message}
        </p>
      )}
    </form>
  );
};
