import styles from './styles.module.scss'
import { StarterProps } from "./type"
import { RouterLink } from '@/components/links/routerLink'
import { linkSizes } from '@/utils/setLinkStyles'

export const Starter = ({ title, subTitle, btnText, bgColor, image, navigateTo }: StarterProps) => (
  <section className={`container ${styles.section}`}>
    <div className={styles.wrapper} style={{
      backgroundColor: bgColor,
      backgroundImage: `url(${image.src})`
    }}>
      <h2 className={styles.title}>{title}</h2>
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
      <RouterLink
        title={btnText}
        primary
        icon
        height={linkSizes.Big}
        path={navigateTo}
      />
    </div>
  </section>
)