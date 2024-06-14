import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export type AreaFieldProps<T extends FieldValues> = {
  label: string
  required?: boolean
  name: Path<T>
  placeholder?: string
  register: UseFormRegister<T>
  errors?: {
    message?: string
  }
};