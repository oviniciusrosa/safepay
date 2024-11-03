import { HttpMethod, HttpResponse, IHttpClient } from "@/src/infra/http-client";

export interface IResetPasswordService {
  exec: (code: string, password: string) => Promise<HttpResponse<void>>;
}

export class ResetPasswordService implements IResetPasswordService {
  constructor(private httpClient: IHttpClient) {}

  async exec(code: string, password: string): Promise<HttpResponse<void>> {
    return await this.httpClient.sendRequest({
      method: HttpMethod.POST,
      url: "/reset-password",
      body: { code, password },
    });
  }
}
