import { ButtonProps } from "../type"
import styles from './styles.module.scss'
import { getBtnStyles } from "@/utils/buttonsStyles"
import svgSrc from '../../../../public/icons/arrow-right-white.svg'
import Image from 'next/image'


export const BtnPrimary = ({ text, height, icon }: ButtonProps) => {

  return (
    <button
      type="button"
      className={`${styles.primaryBtn} ${getBtnStyles(height)}`}
      style={{
        height: height,
      }}
    >
      {text}
      {icon && <Image src={svgSrc} alt="text" width={24} height={24} />}
    </button>
  )
}