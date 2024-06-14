import { UseFormRegister, FieldValues, Path } from 'react-hook-form'
import { ContactFormData } from '@/utils/validation'

export type CheckFieldProps<T extends FieldValues> = {
  label: string
  value: boolean | undefined
  register: UseFormRegister<ContactFormData>
  name: keyof ContactFormData
  errors?: {
    message?: string
  }
  onChange: (v: boolean) => void
};
