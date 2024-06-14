"use client"
import styles from './styles.module.scss'
import dynamic from 'next/dynamic'
const Select = dynamic(() => import('react-select'), { ssr: false })
import { SelectFieldProps } from './type'
import { forwardRef } from 'react'

const SelectField = forwardRef<HTMLDivElement, SelectFieldProps>(
  ({ options, value, label, onChange, ...rest }, ref) => {

    const selected = options.find((el) => el.value === value)

    return (
      <div ref={ref}>
        {label && <p>{label}</p>}
        <Select
          defaultValue={selected}
          options={options}
          onChange={(v: any) => onChange(v.value)}
          styles={{
            control: base => ({
              ...base,
              border: 0,
              boxShadow: 'none',
            }),
            option: (styles, { isSelected }) => ({
              ...styles,
              backgroundColor: isSelected ? '#47D18C' : 'white'
            })
          }}
          className={styles.select}
        {...rest}
      />
    </div>
    )
  }
);

SelectField.displayName = 'SelectField';

export { SelectField };