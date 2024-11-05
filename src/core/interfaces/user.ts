export interface IUser {
  id: number;
  email: string;
  name: string;
  type: "admin" | "user";
  document: string;
  phone: string;
}
