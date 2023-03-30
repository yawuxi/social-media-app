import { FC, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "components/Button";
import { Input } from "components";
import styles from "./index.module.scss";

type Inputs = {
  email: string;
  password: string;
};

export const AuthPage: FC = () => {
  const [isRegistration, setIsRegistration] = useState(false);
  const { register, handleSubmit } = useForm<Inputs>();

  const submitButtonText = isRegistration ? "Registration" : "Login";

  const toggleRegistration = () => {
    setIsRegistration((prevState) => !prevState);
  };

  const onSubmit: SubmitHandler<Inputs> = (values) => {
    console.log(values);
  };

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" {...register("email")} />
        <Input type="password" {...register("password")} />
        <Button type="submit">{submitButtonText}</Button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={toggleRegistration}>Login!</span>
      </p>
    </div>
  );
};
