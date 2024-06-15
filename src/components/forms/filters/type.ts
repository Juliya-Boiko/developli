import { UseFormRegister, FieldValues, Control } from 'react-hook-form'
import { FiltersFormData } from '@/utils/validation'

interface Option {
  label: string,
  value: string,
}

export interface FilterOptionType {
  title: string,
  options: Option[]
}

export type FilterTabProps<T extends FieldValues> = {
  data: FilterOptionType
  name: any
  register: UseFormRegister<FiltersFormData>
  control: Control<FiltersFormData>
}

export interface FiltersFormProps {
  register: UseFormRegister<FiltersFormData>
  control: Control<FiltersFormData>
}