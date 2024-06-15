import styles from './styles.module.scss'
import { address } from '@/constants/socials'
import { ContactForm } from "@/components/forms/contact"
import { Map } from './Map'

export const InTouch = () => (
  <section className={`container ${styles.section}`}>
    <Map address={address} />
    <h2 className={styles.title}>Get in Touch with us</h2>
    <p className={styles.subTitle}>Built for every team across your company, Developli Enterprise boosts productivity with upgraded security and account support. Contact us today to unlock:</p>
    <ContactForm />
  </section>
)