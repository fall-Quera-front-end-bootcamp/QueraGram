export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  email: string;
  username: string;
  tokens: {
    access: string;
    refresh: string;
  };
}

export interface SignupFormData {
  username: string,
  email: string;
  password: string;
}

export interface AvatarResponse {
  avatar: string;
}

export interface BioFormData {
  bio: string;
}

export interface BioResponse {
  bio: string,
}

export interface ProfileLoaderData {
  bio: string;
  avatar: string;
}