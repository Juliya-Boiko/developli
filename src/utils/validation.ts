import * as yup from "yup"

export const contactSchema = yup.object({
  name: yup.string().trim().matches(/^\s*\S+(\s+\S+)+\s*$/, 'Please enter your name & surname').required('Full name is required'),
  email: yup.string().trim().email('Invalid email format').required('Email is required'),
  companyName: yup.string().trim(),
  companySize: yup.string(),
  agreement: yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")

}).required();

export type ContactFormData = yup.InferType<typeof contactSchema>