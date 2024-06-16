export type SelectOption = {
  value: string;
  label: string;
}

export type SelectFieldProps = {
  isMulti: boolean
  label?: string
  value: any
  isGrey?: boolean
  options: SelectOption[]
  onChange: (v: string) => void
}