import { FC, PropsWithChildren } from "react";
import { Sidebar } from "components";

type Props = PropsWithChildren;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};
