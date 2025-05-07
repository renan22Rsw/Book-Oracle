export interface UserSession {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  profileImageUrl?: string | null;
}
