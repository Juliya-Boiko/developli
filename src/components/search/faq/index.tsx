"use client"
import styles from '../styles.module.scss'
import Image from 'next/image'
import svgSearch from '../../../../public/icons/search-normal.svg'
import { SearchProps } from '../type'

export const Search = ({ placeholder, onChange }: SearchProps) => {
  return (
    <div className={styles.wrapper}>
      <Image src={svgSearch} alt="search" width={18} height={18} className={styles.icon} />
      <input
        type="text"
        name="search"
        id="search"
        placeholder={placeholder}
        className={styles.input}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}