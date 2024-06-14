export type SelectOption = {
  value: string;
  label: string;
}

export type SelectFieldProps = {
  label?: string
  value: string | undefined
  options: SelectOption[]
  onChange: (v: string) => void
}