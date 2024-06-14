"use client"
import styles from './styles.module.scss'
import { ButtonPrimaryProps } from "../type"

export const BtnPrimary = ({ type, onClick, title, height, accent }: ButtonPrimaryProps) => (
  <button
    type={type}
    className={`${styles.primaryBtn} ${accent ? styles.primaryBtnAccent : ''} `} 
    style={{
      height: height,
      // fontSize: height === linkSizes.Big ? '16px' : '12px' 
    }}
    onClick={onClick}
  >
    {title}
  </button>
)