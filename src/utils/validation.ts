import * as yup from "yup"

export const contactSchema = yup.object({
  name: yup.string().trim().matches(/^\s*\S+(\s+\S+)+\s*$/, 'Please enter your name & surname').required('Full name is required'),
  email: yup.string().trim().email('Invalid email format').required('Email is required'),
  companyName: yup.string().trim(),
  companySize: yup.string(),
  topics: yup.array().of(yup.string()),
  agreement: yup.boolean().required()
    .oneOf([true], "You must accept the terms and conditions"),
  message: yup.string().trim().required('Message is required')
}).required();

export type ContactFormData = yup.InferType<typeof contactSchema>

export const filtersSchema = yup.object({
  filter: yup.string().trim(),
  experience: yup.array().of(yup.string()),
  category: yup.array().of(yup.string()),
  employmentType: yup.array().of(yup.string()),
  salary: yup.array().of(yup.string()),
  status: yup.array().of(yup.string()),
  location: yup.string(),
  // location: yup.lazy((value: any) => {
  //   return typeof value === 'string' ? yup.string().required() : yup.array().of(yup.string())
  // }),
}).required();

export type FiltersFormData = yup.InferType<typeof filtersSchema>

