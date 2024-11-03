import { HttpMethod, HttpResponse, IHttpClient } from "@/src/infra/http-client";
import { IAuthSession } from "../interfaces/auth-session";

export interface ISendOTPService {
  exec: (email: string) => Promise<HttpResponse<void>>;
}

export class SendOTPService implements ISendOTPService {
  constructor(private httpClient: IHttpClient) {}

  async exec(email: string): Promise<HttpResponse<void>> {
    return await this.httpClient.sendRequest({
      method: HttpMethod.POST,
      url: "/send-code",
      body: { email },
    });
  }
}
