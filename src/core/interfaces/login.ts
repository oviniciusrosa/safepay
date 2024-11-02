import { IUser } from "./user";

export interface ILoginProps {
  errorMessage: string | null;
  requestSignIn: (email: string, password: string) => Promise<void>;
  navigateToForgetPassword: VoidCallback;
  previousAuthenticatedUser: IUser | null;
}
