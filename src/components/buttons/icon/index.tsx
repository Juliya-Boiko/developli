"use client"
import { ButtonProps } from "../type"
import styles from './styles.module.scss'
import svgSrc from '../../../../public/icons/arrow-right-grey.svg'
import Image from 'next/image'

export const BtnIcon = ({ reversed, onClick }: ButtonProps) => {

  
  return (
    <button
      type="button"
      className={styles.iconBtn} 
      style={{
        transform: reversed ? ' scaleX(-1)' : ' scaleX(1)'
      }}
      onClick={onClick}
    >
      <Image src={svgSrc} alt="arrow" width={20} height={20} />
    </button>
  )
}