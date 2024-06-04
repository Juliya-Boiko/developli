import styles from './styles.module.scss'
import { processOpportunities } from '@/constants/processData'
import Image from 'next/image'

export const Opportunities = () => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.titleWrapper}>
        <h2 className="sectionTitle">A world of <span className="accent-green">opportunities</span></h2>
        <p className={styles.subTitle}>We are nost efficient and reliable souce of hiring perocess and two time faster than any other companies</p>
      </div>
      
      <ul className={styles.list}>
        {processOpportunities.map((el) => (
          <li key={el.title} className={styles.listItem}>
            <div>
              <Image src={el.icon} alt={el.title} className={styles.icon} />
              <p className={styles.title} style={{ color: el.color }}>{el.title}</p>
              <p className={styles.text}>{el.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}