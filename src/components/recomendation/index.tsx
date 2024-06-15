"use client"
import Image from 'next/image'
import styles from './styles.module.scss'
import svgSrc from '../../../public/icons/sort.svg'
import { Sort } from '@/components/sort'

export const Recomendation = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.block}>
        <p className={styles.title}>Recomendation</p>
        <p>38 product designer Jobs in United States</p>
      </div>

      <button type="button" className={styles.btnOpen}>
        <Image src={svgSrc} alt="arrow" width={18} height={18} />
      </button>
      
      <div className='mobileHidden'>
        <Sort />
      </div>
    </div>
  )
}