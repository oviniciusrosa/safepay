import { IUser } from "./user";

export interface ILoginProps {
  requestSignIn: (email: string, password: string) => Promise<void>;
  navigateToForgetPassword: VoidCallback;
  previousAuthenticatedUser: IUser | null;
}
