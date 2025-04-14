export type EditUserFormState =
  | {
      errors?: {
        email?: string[];
        gender?: string[];
        name?: string[];
      };
      message?: string;
    }
  | undefined;
