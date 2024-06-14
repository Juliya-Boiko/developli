import styles from './styles.module.scss'
import commonStyles from '../commonStyles.module.scss'
import { TextFieldProps } from "./type"
import { FieldValues } from 'react-hook-form'

export const TextField = <T extends FieldValues>({ label, errors, required, register, type, name, placeholder }: TextFieldProps<T>) => (
  <label htmlFor={name} className={commonStyles.label}>
    <p>{label} {required && <span className='accent-red'>*</span>}</p>
    <div>
      <input type={type} placeholder={placeholder} {...register(name)} className={styles.input} />
      <span className={`accent-red ${commonStyles.errorMessage}`}>{errors ? errors.message : null}</span>
    </div>
  </label>
)
