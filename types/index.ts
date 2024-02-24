export type UserType = 'USER' | 'ADMIN';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  roles: string[];
  type: UserType;
};

export type LoginResponseData = {
  login: {
    accessToken: string;
    refreshToken: string;
    user: User;
  } | null;
};

export type CurrentUserResponseData = {
  currentUser: User | null;
};
