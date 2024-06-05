"use client"
import { ButtonProps } from "../type"
import styles from './styles.module.scss'
import { getBtnStyles } from "@/utils/buttonsStyles"
import svgSrc from '../../../../public/icons/arrow-right-grey.svg'
import Image from 'next/image'

export const BtnOutlined = ({ text, height, icon, onClick }: ButtonProps) => {

  return (
    <button
      type="button"
      className={`${styles.outlinedBtn} ${getBtnStyles(height)}`}
      style={{
        height: height,
      }}
      onClick={onClick}
    >
      {text}
      {icon && <Image src={svgSrc} alt="text" width={24} height={24} />}
    </button>
  )
}