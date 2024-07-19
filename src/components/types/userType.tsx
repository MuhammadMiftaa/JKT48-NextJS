import { memberType } from "./memberType";

export type userType = {
  email: string;
  number: string;
  password: string;
  confirmPassword?: string;
  fullname: string;
  nickname: string;
  oshimen: memberType;
  birthday: string;
  gender: string;
  ID: string;
  address: string;
  postal: string;
  city: string;
  nonjabodetabek: boolean;
  role?: string;
};
