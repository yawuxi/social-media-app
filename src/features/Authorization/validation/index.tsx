import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter a correct email!").required("Required field!"),
  name: yup
    .string()
    .min(3, "Please enter minimum 3 characters!")
    .required("Required field!"),
  password: yup
    .string()
    .min(6, "Please enter minimum 6 characters!")
    .required("Required field!"),
  dateOfBirth: yup.string().required("Required field!"),
  sex: yup.string().required("Required field!"),
});

export const signInValidationSchema = yup.object().shape({
  email: yup.string().email("Please enter a correct email!").required("Required field!"),
  password: yup
    .string()
    .min(6, "Please enter minimum 6 characters!")
    .required("Required field!"),
});
