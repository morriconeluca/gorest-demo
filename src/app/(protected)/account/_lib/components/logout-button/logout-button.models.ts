import { ComponentPropsWithRef } from 'react';

export type LogoutButtonState =
  | {
      message?: string;
    }
  | undefined;

export type TLogoutButton = ComponentPropsWithRef<'form'>;
