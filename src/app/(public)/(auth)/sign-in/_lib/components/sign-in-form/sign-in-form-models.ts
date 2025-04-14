export type SignInFormState =
  | {
      errors?: {
        userId?: string[];
      };
      message?: string;
    }
  | undefined;
