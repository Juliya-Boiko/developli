"use client"
import styles from './styles.module.scss'
import Image from 'next/image'
import svgSrc from '../../../../public/icons/arrow-right-white.svg'
import { ButtonProps } from "../type"
import { getBtnStyles } from "@/utils/buttonsStyles"

export const BtnPrimary = ({ text, height, icon, onClick }: ButtonProps) => (
  <button
    type="button"
    className={`${styles.primaryBtn} ${getBtnStyles(height)}`}
    style={{
      height: height,
    }}
    onClick={onClick}
  >
    {text}
    {icon && <Image src={svgSrc} alt="text" width={24} height={24} />}
  </button>
)