import { FieldNames } from "./enums";

export type FormData = {
  [FieldNames.NAME]: string | { message: string };
  [FieldNames.PRICE]: number | { message: string };
};

export interface LoginData {
  login: {
    accessToken: string;
  };
}

export interface LoginVar {
  input: {
    email: string;
    password: string;
  };
}
