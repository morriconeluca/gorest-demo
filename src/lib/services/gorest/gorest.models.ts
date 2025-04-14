export type Gender = 'female' | 'male';

export type Post = {
  body: string;
  id: number;
  title: string;
  user_id: number;
};

export type User = {
  email: string;
  gender: Gender;
  id: number;
  name: string;
  status: UserStatus;
};

export type UserStatus = 'active' | 'inactive';

export const GOREST_HEADERS = {
  Accept: 'application/json',
  Authorization: `Bearer ${process.env.GOREST_API_KEY}`,
  'Content-Type': 'application/json',
};
