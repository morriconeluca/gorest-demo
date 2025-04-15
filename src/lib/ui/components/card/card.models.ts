import { ComponentPropsWithRef } from 'react';

export type TCard = {
  label?: string;
} & ComponentPropsWithRef<'article'>;
