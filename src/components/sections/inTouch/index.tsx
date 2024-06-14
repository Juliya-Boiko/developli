import styles from './styles.module.scss'
import { ContactForm } from "@/components/forms/contactForm"

export const InTouch = () => (
  <section className={`container ${styles.section}`}>
    <h2 className={styles.title}>Get in Touch with us</h2>
    <p className={styles.subTitle}>Built for every team across your company, Developli Enterprise boosts productivity with upgraded security and account support. Contact us today to unlock:</p>
    <ContactForm />
  </section>
)