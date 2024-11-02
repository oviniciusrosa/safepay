import { IUser } from "./user";

export interface ILoginProps {
  errorMessage: string | null;
  requestSignIn: (email: string, password: string) => Promise<void>;
  previousAuthenticatedUser: IUser | null;
}
