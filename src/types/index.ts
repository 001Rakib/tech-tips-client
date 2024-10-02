import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
export interface ILoggedInUser {
  role: string;
  name: string;
  status: string;
  profilePicture: string;
  iat: number;
  exp: number;
}
