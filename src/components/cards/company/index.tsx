import styles from './styles.module.scss'
import Image from 'next/image'
import imgSrc from '../../../../public/aaaaaa.png'
import { BtnCart } from '@/components/buttons/card'
import { assetsSrc } from '@/utils/assets'
import { CompanyCardProps } from './type'

export const CompanyCard = ({ position, link, description, city, counry, salary }: CompanyCardProps) => (
  <div className={styles.card}>
    <div className={styles.head}>
      <Image src={imgSrc} alt="arrow" width={72} height={72} />
      <div className={styles.actions}>
        <BtnCart icon={assetsSrc.heart} />
        <BtnCart icon={assetsSrc.dots} />
      </div>
    </div>

    <p className={styles.position}>{position}</p>
    
    <div className={styles.info}>
      {link && <span className={styles.link}>{link}</span>}

      <div className={styles.location}>
        <Image src={assetsSrc.locationGrey} alt="arrow" width={20} height={20} />
        {city && <span>{city},</span>}
        {counry && <span>{counry}</span>}
      </div>
      <div className={styles.salary}>
        <Image src={assetsSrc.dollar} alt="arrow" width={20} height={20} />
        <p><span className={styles.amount}>${salary}</span> /Month</p>
      </div>
    </div>

    <p className={styles.description}>{description}</p>

    <div></div>
  </div>
)