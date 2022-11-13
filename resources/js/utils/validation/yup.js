import * as yup from "yup";

export const RegisterSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email("this field must be an email").required(),
    password: yup.string().min(6, "must be more then 6 charterer").required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "password must match")
      .required(),
    phone: yup.string().required(),
  })
  .required();

export const LoginSchema = yup
  .object({
    email: yup.string().email("this field must be an email").required(),
    password: yup.string().required(),
  })
  .required();

export const UpdateProductSchema = yup
  .object({
    prodName: yup.string().required(),
    prodDescription: yup.string().required(),
    qty: yup.string().required(),
    priceBefore: yup.string().required(),
    categoryId: yup.string().required(),
    brandId: yup.string().required(),
  })
  .required();
