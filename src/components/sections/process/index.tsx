import { ProcessProps } from "./type"
import styles from './styles.module.scss'

export const Process = ({ items, children }: ProcessProps) => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.titleWrapper}>
        {children}
      </div>
      <ul className={styles.list}>
        {items.map((el, index) => (
          <li key={el.title} className={styles.listItem}>
            <div className={styles.order}>{index + 1}</div>
            <div>
              <p className={styles.title}>{el.title}</p>
              <p className={styles.text}>{el.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}