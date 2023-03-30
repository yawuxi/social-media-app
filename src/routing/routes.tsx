import { ReactElement } from "react";
import { v4 as uuid } from "uuid";
import { AuthPage } from "features/Authorization";

export enum RoutesEnum {
  AUTH = "/auth",
  HOME = "/home",
}

type Route = {
  path: (typeof RoutesEnum)[keyof typeof RoutesEnum];
  element: ReactElement;
  id: string;
};

export const PUBLIC_ROUTES: Route[] = [
  {
    path: RoutesEnum.AUTH,
    element: <AuthPage />,
    id: uuid(),
  },
];

export const PRIVATE_ROUTES: Route[] = [];
