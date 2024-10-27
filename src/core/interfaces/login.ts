export interface ILoginProps {
  requestSignIn: (email: string, password: string) => Promise<void>;
  navigateToForgetPassword: VoidCallback;
}
