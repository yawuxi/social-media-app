import { FC, HTMLProps } from "react";
import styles from "./index.module.scss";

type Props = HTMLProps<HTMLButtonElement> & {
  type: "submit" | "button" | "reset" | undefined;
};

export const Button: FC<Props> = ({ children, type = "button", ...props }) => {
  return (
    <button {...props} type={type} className={styles.button}>
      {children}
    </button>
  );
};
