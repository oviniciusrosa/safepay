export enum HttpKnownErrors {
  UnknownError = "UnknownError",
  Unauthorized = "Unauthorized",
}

export interface IHttpError {
  type: HttpKnownErrors;
  status: number;
  message: unknown;
}

export class HttpError implements IHttpError {
  type: HttpKnownErrors;

  constructor(public status: number, public message: unknown) {
    console.error(`Request failed with status ${status}: ${message}`);

    if (status === 401) {
      this.type = HttpKnownErrors.Unauthorized;
    } else {
      this.type = HttpKnownErrors.UnknownError;
    }
  }
}
