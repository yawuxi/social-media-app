import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "components";
import { SignInInputs } from "../../types/sign-in";
import { signInValidationSchema } from "../../validation";
import styles from "../../scss/forms.module.scss";

type Props = {
  submitFunction: (values: SignInInputs) => void;
};

export const SignIn: FC<Props> = ({ submitFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>({
    mode: "all",
    resolver: yupResolver(signInValidationSchema),
  });

  const onSubmit: SubmitHandler<SignInInputs> = (values) => {
    submitFunction(values);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Email" type="text" {...register("email")} />
        {errors.email?.message && <div className="formError">{errors.email.message}</div>}
        <Input placeholder="Password" type="password" {...register("password")} />
        {errors.password?.message && (
          <div className="formError">{errors.password.message}</div>
        )}
        <Button background="accent" textColor="white" type="submit">
          Sign In
        </Button>
      </form>
    </>
  );
};
