import { HttpMethod, HttpResponse, IHttpClient } from "@/src/infra/http-client";
import { IAuthSession } from "../interfaces/auth-session";

export interface IAuthCredentialsService {
  exec: (
    email: string,
    password: string
  ) => Promise<HttpResponse<IAuthSession>>;
}

export class AuthCredentialsService implements IAuthCredentialsService {
  constructor(private httpClient: IHttpClient) {}

  async exec(
    email: string,
    password: string
  ): Promise<HttpResponse<IAuthSession>> {
    return await this.httpClient.sendRequest<IAuthSession>({
      method: HttpMethod.POST,
      url: "/auth",
      body: { email, password },
    });
  }
}
