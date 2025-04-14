export type EditPostFormState =
  | {
      errors?: {
        body?: string[];
        title?: string[];
      };
      message?: string;
    }
  | undefined;
