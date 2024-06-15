"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import svgSrc from '../../../public/icons/cross-blue.svg'
import { TagsProps } from './type'
import { experienceFilters, categoryTags, typeFilters, salaryRange, jobStatus } from "@/constants/processData"

export const Tags = ({ data, onClick }: TagsProps) => {
  const filtered = Object.values(data).filter((el) => Array.isArray(el)).flat()
  const filtersSet = [ ...experienceFilters.options, ...categoryTags.options, ...typeFilters.options, ...salaryRange.options, ...jobStatus.options]
  const tags = filtered.map((el) => filtersSet.find((item) => item.value === el))

  return (
    <ul className={styles.tagsList}>
      {tags.map((el) => (
        <li key={el?.value} className={styles.tag} onClick={() => onClick(el?.value)}>
          <button type="button" className={styles.btnDelete}>
            <Image src={svgSrc} alt="delete" width={24} height={24} />
          </button>
          <span>{el?.label}</span>
        </li>
      ))}
    </ul>
  )
}
