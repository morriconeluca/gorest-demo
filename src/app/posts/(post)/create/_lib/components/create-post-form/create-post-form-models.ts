export type CreatePostFormState =
  | {
      errors?: {
        body?: string[];
        title?: string[];
      };
      message?: string;
    }
  | undefined;
