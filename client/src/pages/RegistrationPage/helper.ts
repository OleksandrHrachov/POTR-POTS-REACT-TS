import * as Yup from 'yup';

export const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'min length 2 characters')
    .max(15, 'max length 15 characters')
    .required('required'),
  lastName: Yup.string()
    .min(2, 'min length 2 characters')
    .max(15, 'max length 15 characters')
    .required('required'),
  email: Yup.string()
    .email('email must be a valid email')
    .required('required'),
  password: Yup.string()
    .min(5, 'min length 5 characters')
    .max(15, 'max length 15 characters')
    .required('required'),
});
