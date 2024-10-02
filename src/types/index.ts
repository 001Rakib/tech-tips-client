import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface ILoggedInUser {
  _id: string;
  role: string;
  name: string;
  email: string;
  status: string;
  profilePicture: string;
  iat: number;
  exp: number;
}
export interface IUser {
  _id: string;
  role: string;
  name: string;
  status: string;
  profilePicture: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
