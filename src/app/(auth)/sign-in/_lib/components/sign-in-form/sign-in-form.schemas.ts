import { z } from 'zod';

export const SignInFormSchema = z.object({
  userId: z
    .string({
      required_error: 'UserId is required.',
    })
    .trim()
    .refine((value) => value && !isNaN(Number(value)), {
      message: 'Please enter a valid UserId.',
    }),
});

export type SignInFormType = z.infer<typeof SignInFormSchema>;
