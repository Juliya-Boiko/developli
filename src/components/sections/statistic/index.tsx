import styles from './styles.module.scss'
import Image from 'next/image'
import img1 from '../../../../public/images/gallery1.png'
import img2 from '../../../../public/images/gallery2.png'
import img3 from '../../../../public/images/gallery3.png'
import img4 from '../../../../public/images/gallery4.png'
import { StatisticProps } from './type'
import { linkSizes } from '@/utils/setLinkStyles'
import { routesNames } from '@/constants/routesNames'
import { RouterLink } from '@/components/links/routerLink'

export const Statistic = ({ title, accent, subtitle, showActions }: StatisticProps) => {
  const locations = 28
  const vacancies = 289

  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>{title} <span className="accent-green">{accent}</span></h1>
      <p className={styles.subTitle}>{subtitle}</p>
      {showActions && (
        <div className={styles.buttonsWrapper}>
          <RouterLink
            title="Find a job"
            primary
            icon
            height={linkSizes.Big}
            path={routesNames.Index}
          />
          <RouterLink
            title="Create CV"
            icon
            height={linkSizes.Big}
            path={routesNames.Index}
          />
        </div>
      )}
      
      <div className={styles.gallery}>
        <div className={styles.div1}>
          <Image src={img4} alt="Gallery" />
        </div>
        <div className={styles.div2}>
          <p>Vacancies</p>
          <p className={styles.count}>{vacancies}+</p>
        </div>
        <div className={styles.div3}>
          <Image src={img1} alt="Gallery" />
        </div>
        <div className={styles.div4}>
          <Image src={img2} alt="Gallery" />
        </div>
        <div className={styles.div5}>
          <p>Locations</p>
          <p className={styles.count}>{locations}+</p>
        </div>
        <div className={styles.div6}>
          <Image src={img3} alt="Gallery" />
        </div>
      </div>
    </section>
  )
}