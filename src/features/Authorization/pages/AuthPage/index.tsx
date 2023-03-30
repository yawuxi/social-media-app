import { FC, useState } from "react";
import { SignUp } from "../../components/SignUp";
import { SignIn } from "../../components/SignIn";
import styles from "./index.module.scss";

export const AuthPage: FC = () => {
  const [isRegistration, setIsRegistration] = useState(true);

  const userText = !isRegistration ? "Sign Up" : "Sign In";
  const userQuestionText = isRegistration
    ? "Already have an account?"
    : "Have no account?";

  const toggleRegistration = () => {
    setIsRegistration((prevState) => !prevState);
  };

  const submitFunction = (values: any) => {
    for (const value in values) {
      if (value === "sex") {
        console.log("sign up", values);
        return;
      }
    }

    console.log("sign in", values);
  };

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {isRegistration ? (
          <SignUp submitFunction={submitFunction} />
        ) : (
          <SignIn submitFunction={submitFunction} />
        )}
        <p className={styles.question}>
          {userQuestionText} <span onClick={toggleRegistration}>{userText}</span>
        </p>
      </div>
    </div>
  );
};
