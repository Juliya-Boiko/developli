"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import svgSrc from '../../../../public/icons/arrow-right-grey.svg'
import { ButtonProps } from "../type"
import { getBtnStyles } from "@/utils/buttonsStyles"

export const BtnOutlined = ({ text, height, icon, onClick }: ButtonProps) => (
  
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