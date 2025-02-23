import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter a valid full name.')
    .min(3, 'Full name must be between 3 and 20 characters long')
    .max(30, 'Full name must be between 3 and 20 characters long only'),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters'),
  confirmPassword: yup
    .string()
    .required('Password must match')
    .min(8)
    .oneOf([yup.ref('password')], 'Passwords must match'),
  course: yup.string().required(),
  sem: yup.string().required(),
  branch: yup.string().required(),
  year: yup.string().required(),
  college: yup.string(),
  university: yup.string().required(),
  //   hallTicket: yup.string(),
});
export const LoginvalidationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be less than 20 characters'),
});

export const UploadvalidationSchema = yup.object().shape({
  course: yup.string().required(),
  branch: yup.string().required(),
  Year: yup.string().required(),
  sem: yup.string().required(),
  category: yup.string().required(),
  subject: yup.string().required(),
  units: yup.string(),
});

export const NotesSearchValidationSchema = yup.object().shape({
  sem: yup.string(),
  branch: yup.string(),
  course: yup.string(),
  notes: yup.string(),
});

export const updatevalidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(20, 'Name must be less than 20 characters'),
  course: yup.string(),
  sem: yup.string().required(),
  branch: yup.string(),
  Year: yup.string().required(),
  college: yup.string(),
});

export const EditUploadvalidationSchema = yup.object().shape({
  name: yup.string(),
  category: yup.string(),
  units: yup.string(),
});

export const searchFilterValidationSchema = yup.object().shape({
  sem: yup.string(),
  branch: yup.string(),
});

export const requestResource = yup.object().shape({
  subject: yup.string(),
  resourceType: yup.string(),
  sem: yup.string(),
  branch: yup.string()
});
