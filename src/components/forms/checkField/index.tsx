import styles from './styles.module.scss'
import { CheckFieldProps } from "./type"
import { FieldValues } from 'react-hook-form'
import { forwardRef } from 'react'

const CheckField = forwardRef<HTMLInputElement, CheckFieldProps<FieldValues>>(({ label, name, value, errors, register, onChange }, ref) => (
  <label className={`${styles.check} ${errors ? 'accent-red' : ''}`}>
    <input
      type="checkbox"
      {...register(name)}
      ref={ref}
      onChange={(e) => onChange(e.target.checked)}
      className='hidden'
    />
    <span className={`${styles.customCheck} ${errors ? styles.errorCheck : value ? styles.checkedCheck : styles.defaultCheck}`}></span>
    <p>{label}</p>
  </label>
));

CheckField.displayName = 'CheckField';

export { CheckField }