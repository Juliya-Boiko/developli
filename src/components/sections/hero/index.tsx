import Image from 'next/image'
import bgiSrc from '../../../../public/bgi/hero.svg'
import image1 from '../../../../public/images/1405.png'
import image2 from '../../../../public/images/163559.png'
import image3 from '../../../../public/images/163560.png'

import styles from './styles.module.scss'
import { BtnOutlined } from "@/components/buttons/outlined"
import { BtnPrimary } from "@/components/buttons/primary"
import { buttonSizes } from "@/constants/buttonSizes"

export const Hero = () => {
  return (
    <section className="container">
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <h1 className="pageTitle">Let’s <span className="accent-green">boost up</span> your hiring process</h1>
          <p className={styles.text}>We are nost efficient and reliable souce of hiring <br/> perocess and two time faster than any other companies</p>
          <div className={styles.actions}>
            <BtnPrimary text="Start hiring" height={buttonSizes.Big} icon onClick={() => console.log('Hero')} />
            <BtnOutlined text="Post a job" height={buttonSizes.Big} icon onClick={() => console.log('Hero')} />
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
          <Image 
            src={bgiSrc}
            alt='Image'
            className={styles.bgImage}
          />
        </div>
      </div>
    </section>
  )
}