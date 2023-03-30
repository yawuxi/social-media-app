import { forwardRef, HTMLProps } from "react";
import styles from "./index.module.scss";

export const Input = forwardRef<HTMLInputElement, HTMLProps<HTMLInputElement>>(
  (props, ref) => <input className={styles.input} ref={ref} {...props} />
);
