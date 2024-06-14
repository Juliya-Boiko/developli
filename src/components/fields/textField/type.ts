import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { HTMLInputTypeAttribute } from 'react'

export type TextFieldProps<T extends FieldValues> = {
  label: string
  required?: boolean
  type: HTMLInputTypeAttribute
  name: Path<T>
  placeholder?: string
  register: UseFormRegister<T>
  errors?: {
    message?: string
  }
};
