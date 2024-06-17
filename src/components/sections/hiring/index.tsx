import styles from './styles.module.scss'
import { FlipList } from "@/components/lists/flips"
import { processGuid } from '@/constants/processData'

export const Hiring = () => (
  <section className={`container ${styles.section}`}>
    <h2 className={`sectionTitle ${styles.title}`}>With Developli, hiring is <br /> <span className="accent-green">easy-peasy</span>, lemon squeezy</h2>
    <p className={styles.subTitle}>Our hiring process is so simple and easy to do, just follow the steps and you’re done!</p>
    {/* <FlipList data={processGuid} /> */}
  </section>
)