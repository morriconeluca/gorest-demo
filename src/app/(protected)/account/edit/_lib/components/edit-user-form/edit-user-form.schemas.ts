import { z } from 'zod';

export const EditUserFormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required.',
    })
    .email({ message: 'Please enter a valid email.' })
    .trim(),
  gender: z.enum(['female', 'male'], {
    required_error: 'Gender is required.',
  }),
  name: z
    .string({
      required_error: 'Name is required.',
    })
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .trim(),
});

export type EditUserFormType = z.infer<typeof EditUserFormSchema>;
