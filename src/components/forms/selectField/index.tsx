"use client"
import dynamic from 'next/dynamic'
import styles from './styles.module.scss'
import commonStyles from '../styles.module.scss'
import { SelectFieldProps } from './type'
import { forwardRef } from 'react'

const Select = dynamic(() => import('react-select'), { ssr: false })

const SelectField = forwardRef<HTMLDivElement, SelectFieldProps>(
  ({ options, value, label, onChange, isMulti, ...rest }, ref) => {

    const selected = options.find((el) => el.value === value)

    const handleChange = (data: any) => {
      if (isMulti) {
        const values = data.map((el: any) => el.value)
        onChange(values)
      } else {
        onChange(data.value)
      }
    }

    return (
      <div ref={ref} className={styles.select}>
        {label && <p className={commonStyles.label}>{label}</p>}
        <Select
          defaultValue={selected}
          isMulti={isMulti}
          options={options}
          onChange={handleChange}
          placeholder=' '
          styles={{
            control: base => ({
              ...base,
              padding: '8px',
              fontSize: '14px',
              border: 0,
              borderRadius: '16px',
              boxShadow: 'none',
              backgroundColor: '#F6F8F9'
            }),
            option: (styles, { isSelected }) => ({
              ...styles,
              backgroundColor: isSelected ? '#47D18C' : 'white'
            })
          }}
        {...rest}
      />
    </div>
    )
  }
);

SelectField.displayName = 'SelectField';

export { SelectField };