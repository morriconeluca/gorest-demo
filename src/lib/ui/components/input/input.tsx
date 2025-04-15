'use client';

import { useId } from 'react';
import Image from 'next/image';
import t from '@/lib/ui/theme/recipes/typography.styles';
import { TInput } from './input.models';
import * as S from './input.styles';

export const Input = ({ className, error, label, style, ...rest }: TInput) => {
  const errorId = useId();

  return (
    <p className={`${className} h-[110px]`} style={style}>
      <label className="mb-1">
        <span className={`${t.label} mb-1`}>{label}</span>
        <input
          aria-describedby={errorId}
          aria-invalid={!!error}
          {...rest}
          className={S.input}
        />
      </label>
      <span
        aria-live="polite"
        className={`${t.error} flex items-center gap-1`}
        id={errorId}
      >
        {error && (
          <>
            <Image
              alt="error"
              aria-hidden="true"
              height={16}
              src="/interface/circle-exclamation.svg"
              width={16}
            />
            {error}
          </>
        )}
      </span>
    </p>
  );
};
