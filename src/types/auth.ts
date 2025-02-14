export interface LoginCredentials {
  userName: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  contact: string;
  userName: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    userName: string;
    contact: string;
  };
}