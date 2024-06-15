import { UseFormRegister, FieldValues, Path, Control } from 'react-hook-form'
import { FiltersFormData } from '@/utils/validation'
import { Ref } from 'react'
export interface SearchProps {
  placeholder: string
  onChange: (v: string) => void
}

export interface JobSearchProps<T extends FieldValues = FieldValues> {
  filter: Path<T>
  placeholder?: string
  register: UseFormRegister<T>
  control: Control<FiltersFormData>
  onClick: () => void
}


type SelectOption = {
  value: string;
  label: string;
}

export type SelectFieldProps = {
  label?: string
  value: any
  options: SelectOption[]
  onChange: (v: string) => void
}