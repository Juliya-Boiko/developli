'use client'
import { usePathname } from 'next/navigation'
import styles from './styles.module.scss'

export const Scrumbs = () => {
  const pathname = usePathname()

  return (
    <section className={styles.scrumbs}>{pathname.substring(1)}</section>
  )
}