import { z } from 'zod';

export const EditPostFormSchema = z.object({
  body: z
    .string({
      required_error: 'Body is required.',
    })
    .min(150, { message: 'Title must be at least 150 characters long.' })
    .max(400, { message: 'Title must be at most 400 characters long.' })
    .trim(),
  title: z
    .string({
      required_error: 'Title is required.',
    })
    .min(20, { message: 'Title must be at least 20 characters long.' })
    .max(40, { message: 'Title must be at most 40 characters long.' })
    .trim(),
});

export type EditPostFormType = z.infer<typeof EditPostFormSchema>;
