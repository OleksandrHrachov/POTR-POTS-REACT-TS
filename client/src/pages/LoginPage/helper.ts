import * as Yup from 'yup';

export const logInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('email must be a valid email')
    .required('required'),
  password: Yup.string()
    .min(5, 'min length 5 characters')
    .max(15, 'max length 15 characters')
    .required('required'),
});
