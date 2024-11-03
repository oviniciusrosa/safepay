export interface IPasswordRules {
  description: string;
  isConditionAchieved: () => boolean;
}

export interface IResetPasswordProps {
  rules: IPasswordRules[];
  errorMessage: string | null;
  onChangePassword: (password: string) => void;
  onChangeConfirmPassword: (password: string) => void;
  submitPasswordChange: VoidCallback;
  canSubmit: boolean;
}
