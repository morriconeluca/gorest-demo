export type CreateUser = {
  email: string;
  gender: 'female' | 'male';
  name: string;
};

export type CreateUserError = {
  status: number;
  json: () => Promise<Array<{ field: string; message: string }>>;
};
