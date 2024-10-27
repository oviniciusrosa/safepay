import { AxiosError, AxiosInstance } from "axios";
import { axiosInstance } from "./axios-instance";
import { HttpError, IHttpError } from "./http-error";

export enum HttpMethod {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

export type HttpRequest<TBody = Record<string, unknown>> = {
  method: HttpMethod;
  url: string;
  body?: TBody;
  headers?: Record<string, string>;
};

export interface IHttpClient {
  sendRequest: <TResponse, TBody = Record<string, unknown>>(
    request: HttpRequest<TBody>
  ) => Promise<HttpResponse<TResponse>>;
}

export type HttpResponse<T> = [T] | [null, IHttpError];

export class HttpClient implements IHttpClient {
  private constructor(private api: AxiosInstance = axiosInstance) {}

  static create(): HttpClient {
    return new HttpClient();
  }

  async sendRequest<TResponse, TBody = Record<string, unknown>>(
    request: HttpRequest<TBody>
  ): Promise<HttpResponse<TResponse>> {
    try {
      const { data } = await this.api.request<TResponse>({
        url: request.url,
        method: request.method,
        headers: request.headers,
        data: request.body,
      });

      return [data];
    } catch (err) {
      const error = err as AxiosError;
      console.log("error", error);
      const status = error.response?.status;
      const message = error.response?.data || error.message;

      const httpError = new HttpError(status, message);

      return [null, httpError];
    }
  }
}
