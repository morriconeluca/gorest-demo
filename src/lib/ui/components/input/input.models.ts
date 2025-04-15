import { ComponentPropsWithRef } from 'react';

export type TInput = {
  error?: string;
  label: string;
} & ComponentPropsWithRef<'input'>;
