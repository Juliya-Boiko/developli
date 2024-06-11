import Image from 'next/image'
import image1 from '../../../../public/images/1405.png'
import image2 from '../../../../public/images/163559.png'
import image3 from '../../../../public/images/163560.png'
import styles from './styles.module.scss'
import { RouterLink } from '@/components/links/routerLink'
import { linkSizes } from '@/utils/setLinkStyles'
import { routesNames } from '@/constants/routesNames'

export const Hero = () => (
  <section className="container">
    <div className={styles.content}>
      <div className={styles.wrapper}>
        <h1 className="pageTitle">Let’s <span className="accent-green">boost up</span> your hiring process</h1>
        <p className={styles.text}>We are nost efficient and reliable souce of hiring <br/> perocess and two time faster than any other companies</p>
        <div className={styles.actions}>
          <RouterLink
            title="Start hiring"
            primary
            icon
            height={linkSizes.Big}
            path={routesNames.Index}
          />
          <RouterLink
            title="Post a job"
            icon
            height={linkSizes.Big}
            path={routesNames.Index}
          />
        </div>
      </div>
      <div className={styles.images}>
        <Image 
          src={image1}
          alt='Image1'
          className={styles.image3}
        />
        <Image 
          src={image2}
          alt='Image1'
          className={styles.image2}
        />
        <Image 
          src={image3}
          alt='Image1'
          className={styles.image1}
        />
      </div>
    </div>
  </section>
)
