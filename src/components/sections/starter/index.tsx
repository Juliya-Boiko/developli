import { BtnPrimary } from "@/components/buttons/primary"
import { buttonSizes } from "@/constants/buttonSizes"
import { StarterProps } from "./type"
import styles from './styles.module.scss'
import Image from 'next/image'

export const Starter = ({ title, btnText, bgColor, image, onClick }: StarterProps) => {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.wrapper} style={{
        backgroundColor: bgColor
      }}>
        <div className={styles.block}>
          <h2 className={styles.title}>{title}</h2>
          <BtnPrimary text={btnText} height={buttonSizes.Big} icon onClick={onClick} />
        </div>
        <Image src={image} alt="Image" className={styles.image} />
      </div>
    </section>
  )
}