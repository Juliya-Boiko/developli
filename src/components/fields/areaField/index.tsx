import styles from './styles.module.scss'
import commonStyles from '../commonStyles.module.scss'
import { AreaFieldProps } from "./type"
import { FieldValues } from 'react-hook-form'

export const AreaField = <T extends FieldValues>({ label, errors, required, register, name, placeholder }: AreaFieldProps<T>) => (
  <label htmlFor={name} className={commonStyles.label}>
    <p>{label} {required && <span className='accent-red'>*</span>}</p>
    <div>
      <textarea placeholder={placeholder} {...register(name)} className={styles.textarea} />
      <span className={`accent-red ${commonStyles.errorMessage}`}>{errors ? errors.message : null}</span>
    </div>
  </label>
)