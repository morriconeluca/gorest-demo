export type EditUser = {
  email: string;
  gender: 'female' | 'male';
  name: string;
  userId: number;
};

export type EditUserError = {
  status: number;
  json: () => Promise<Array<{ field: string; message: string }>>;
};
