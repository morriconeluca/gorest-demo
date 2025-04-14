export type SignUpFormState =
  | {
      errors?: {
        email?: string[];
        gender?: string[];
        name?: string[];
      };
      message?: string;
    }
  | undefined;
