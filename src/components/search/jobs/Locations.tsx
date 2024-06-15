"use client"
import styles from '../styles.module.scss'
import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

type SelectOption = {
  value: string;
  label: string;
}

type SelectFieldProps = {
  label?: string
  value: any
  options: SelectOption[]
  onChange: (v: string) => void
}

const Select = dynamic(() => import('react-select'), { ssr: false })

const LocationField = forwardRef<HTMLDivElement, SelectFieldProps>(
  ({ options, value, label, onChange, ...rest }, ref) => {

    const selected = options.find((el) => el.value === value)

    const handleChange = (data: any) => {
      onChange(data.value)
    }

    return (
      <div ref={ref} className={styles.select}>
        <Select
          defaultValue={selected}
          options={options}
          onChange={handleChange}
          placeholder=' '
          styles={{
            control: base => ({
              ...base,
              padding: '8px',
              fontSize: '14px',
              border: 0,
              boxShadow: 'none',
              backgroundColor: '#fff'
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

LocationField.displayName = 'LocationField';

export { LocationField };