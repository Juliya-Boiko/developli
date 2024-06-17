import styles from './styles.module.scss'
import { FlipCardType } from "@/types/flips"

export const FlipCard = ({ order, title, text, back }: FlipCardType) => (
  <li className={styles.card}>
    <div className={styles.inner}>
      <div className={styles.front}>
        <p className={styles.order}>{order}</p>
        <p className={styles.title}>{title}</p>
        <p>{text}</p>
      </div>

      <div className={styles.back}>
        <p>{back}</p>
      </div>
    </div>
  </li>
)