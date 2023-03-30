import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input } from "components";
import { SignUpInputs } from "../../types/sign-up";
import { signUpValidationSchema } from "../../validation";
import styles from "../../scss/forms.module.scss";

type Props = {
  submitFunction: (values: SignUpInputs) => void;
};

export const SignUp: FC<Props> = ({ submitFunction }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInputs>({
    mode: "all",
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmit: SubmitHandler<SignUpInputs> = (values) => {
    submitFunction(values);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Email" type="text" {...register("email")} />
        {errors.email?.message && <div className="formError">{errors.email.message}</div>}
        <Input placeholder="Name" type="text" {...register("name")} />
        {errors.name?.message && <div className="formError">{errors.name.message}</div>}
        <Input placeholder="Password" type="password" {...register("password")} />
        {errors.password?.message && (
          <div className="formError">{errors.password.message}</div>
        )}
        <div className={styles.detailed}>
          <div className={styles.detailedBlock}>
            <Input type="date" {...register("dateOfBirth")} />
            {errors.dateOfBirth?.message && (
              <div className="formError">{errors.dateOfBirth.message}</div>
            )}
          </div>
          <div className={styles.detailedBlock}>
            <div className={styles.sex}>
              <label>
                <Input type="radio" {...register("sex")} />
                Male
              </label>
              <label>
                <Input type="radio" {...register("sex")} />
                Female
              </label>
            </div>
            {errors.sex?.message && <div className="formError">{errors.sex.message}</div>}
          </div>
        </div>
        <Button background="accent" textColor="white" type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
};
