export interface IRequestOTPProps {
  canGoNext: boolean;
  goNext: VoidCallback;
  secondsToResend: number;
  resendCode: VoidCallback;
  changeCode: (code: string) => void;
}
