import { forwardRef, HTMLProps } from "react";
import styles from "./index.module.scss";

type Props = HTMLProps<HTMLInputElement> & {
  placeholder?: string;
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => (
  <input
    className={styles.input}
    ref={ref}
    {...props}
    style={{ cursor: props.type === "radio" ? "pointer" : "auto" }}
  />
));
