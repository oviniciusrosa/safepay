export interface IForgotPasswordProps {
  errorMessage: string | null;
  saveEmail: VoidCallback;
  onChangeEmail: (email: string) => void;
}
