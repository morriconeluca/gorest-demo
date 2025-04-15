import { ComponentPropsWithRef } from 'react';

export type TTextarea = {
  error?: string;
  label: string;
} & ComponentPropsWithRef<'textarea'>;
