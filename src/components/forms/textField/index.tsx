import { TextFieldProps } from "./type"
import { FieldValues } from 'react-hook-form'

export const TextField = <T extends FieldValues>({ label, errors, required, register, type, name, placeholder }: TextFieldProps<T>) => (
  <label htmlFor={name}>
    <p>{label} {required && <span>*</span>}</p>
    <input type={type} placeholder={placeholder} {...register(name)} />
    {errors && <span>{errors.message}</span>}
  </label>
)
