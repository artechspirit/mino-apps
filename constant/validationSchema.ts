import * as yup from 'yup';

export const validationSchemaUser = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  username: yup.string().required('Username is required'),
  phone: yup.string().required(),
  gender: yup.string().required(),
  tempat_lahir: yup.string().optional(),
  tanggal_lahir: yup.date().optional(),
  bank: yup.string().optional(),
  no_rekening: yup.string().optional(),
  status: yup.string().optional(),
  alamat: yup.string().optional()
});