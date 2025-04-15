import { ComponentPropsWithRef } from 'react';

export type DeletePostButtonState =
  | {
      message?: string;
    }
  | undefined;

export type TDeletePostButton = {
  postId: number;
} & ComponentPropsWithRef<'form'>;
