import { FC, HTMLProps } from "react";
import styles from "./index.module.scss";

type Props = HTMLProps<HTMLButtonElement> & {
  type: "submit" | "button" | "reset" | undefined;
  background?: "accent" | "transparent" | "lightGray" | "white";
  textColor?: "main" | "white";
};

export const Button: FC<Props> = ({
  children,
  type = "button",
  background = "white",
  textColor = "main",
  ...props
}) => {
  let buttonBackground;
  let buttonTextColor;

  switch (background) {
    case "transparent":
      buttonBackground = "transparent";
      break;
    case "accent":
      buttonBackground = styles.bgAccent;
      break;
    case "white":
      buttonBackground = styles.bgWhite;
      break;
    case "lightGray":
      buttonBackground = styles.bgLightGray;
      break;
  }

  switch (textColor) {
    case "white":
      buttonTextColor = styles.textWhite;
      break;
    case "main":
      buttonTextColor = styles.textMain;
      break;
  }

  return (
    <button
      {...props}
      type={type}
      className={`${styles.button} ${buttonBackground} ${buttonTextColor}`}
    >
      {children}
    </button>
  );
};
