import { HttpMethod, HttpResponse, IHttpClient } from "@/src/infra/http-client";

export interface IResetPasswordService {
  sendOTP: (email: string) => Promise<HttpResponse<void>>;
  resetPassword: (
    code: string,
    password: string
  ) => Promise<HttpResponse<void>>;
}

export class ResetPasswordService implements IResetPasswordService {
  constructor(private httpClient: IHttpClient) {}

  async sendOTP(email: string): Promise<HttpResponse<void>> {
    return await this.httpClient.sendRequest({
      method: HttpMethod.POST,
      url: "/users/reset-password",
      body: { email },
    });
  }

  async resetPassword(
    code: string,
    password: string
  ): Promise<HttpResponse<void>> {
    return await this.httpClient.sendRequest({
      method: HttpMethod.POST,
      url: "/users/reset-password/confirm",
      body: { code, password },
    });
  }
}
