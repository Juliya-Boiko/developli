import styles from './styles.module.scss'
import Image from 'next/image'
import { processSupport } from '@/constants/processData'
import { SupportProps } from './type'

export const Support = ({ title, subtitle }: SupportProps) => (
  <section className={`container ${styles.section}`}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
    <ul className={styles.list}>
      {processSupport.map((el) => (
        <li key={el.name} className={styles.item}>
          <Image src={el.icon} alt={el.name} className={styles.icon} />
          <a href={el.linkType} className={styles.link}>{el.linkTitle}</a>
          <p>{el.name}</p>
        </li>
      ))}
    </ul>
  </section>
)