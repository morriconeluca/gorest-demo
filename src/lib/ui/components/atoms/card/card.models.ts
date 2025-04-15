import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type TCard = {
  label?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
