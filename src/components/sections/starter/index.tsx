import Image from 'next/image'
import styles from './styles.module.scss'
import { StarterProps } from "./type"
import { RouterLink } from '@/components/links/routerLink'
import { linkSizes } from '@/utils/setLinkStyles'

export const Starter = ({ title, btnText, bgColor, image, navigateTo }: StarterProps) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.wrapper} style={{
      backgroundColor: bgColor
    }}>
      <div className={styles.block}>
        <h2 className={styles.title}>{title}</h2>
        <RouterLink
          title={btnText}
          primary
          icon
          height={linkSizes.Big}
          path={navigateTo}
        />
      </div>
      <Image src={image} alt="Image" className={styles.image} />
    </div>
  </section>
)