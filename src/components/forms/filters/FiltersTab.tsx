"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import svgSrc from '../../../../public/icons/arrow-down.svg'
import { FilterTabProps } from "./type"
import { useState } from "react"
import { FieldValues, useWatch } from 'react-hook-form'
import { forwardRef } from 'react'

const FilterTab = forwardRef<HTMLInputElement, FilterTabProps<FieldValues>>(({ data, name, register, control }, ref) => {
  const [open, toggleOpen] = useState(false)

  const values = useWatch({
    control,
    name: name
  });

  const getStyles = (v: string) => {
    return values && Array.isArray(values) && values.includes(v) ? styles.checkedCheck : styles.defaultCheck
  }

  const handleOpen = () => {
    toggleOpen((prev) => !prev)
  }

  return (
    <div ref={ref} className={styles.wrapper}>
      <button type="button" className={styles.btnExpand} onClick={handleOpen}>
        {data.title}
        <Image src={svgSrc} alt="arrow" width={18} height={18} className={`${styles.icon} ${open ? styles.iconReversed : ''}`} />
      </button>
      
      {open && (
        <div className={styles.options}>
          {data.options.map((el) => (
            <label key={el.label} className={styles.label}>
              <input
                id={el.value} 
                type="checkbox"
                value={el.value} 
                {...register(name)}
                className='hidden'
              />
              <span className={`${styles.customCheck} ${getStyles(el.value)}`}></span>
              <span>{el.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
});

FilterTab.displayName = 'FilterTab';

export { FilterTab }