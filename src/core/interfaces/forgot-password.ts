export interface IForgotPasswordProps {
  email: string;
  hasDefaultEmail: boolean;
  errorMessage: string | null;
  saveEmail: VoidCallback;
  onChangeEmail: (email: string) => void;
}
