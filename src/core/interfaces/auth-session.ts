import { IUser } from "./user";

export interface IAuthSession {
  token?: string;
  user: IUser;
}
