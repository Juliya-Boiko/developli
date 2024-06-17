import styles from './styles.module.scss'
import { FlipListProps } from "./type"
import { FlipCard } from "@/components/cards/flip"

export const FlipList = ({ data }: FlipListProps) => (
  <ul className={styles.list}>
    {data.map((el, idx) => (
      <FlipCard
        key={el.title}
        order={idx + 1}
        title={el.title}
        text={el.text}
        back={el.back}
      />
    ))}
  </ul>
)