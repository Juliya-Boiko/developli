"use client"
import styles from './styles.module.scss'
import { ButtonPrimaryProps } from "../type"

export const BtnPrimary = ({ type, onClick, title, height, accent }: ButtonPrimaryProps) => (
  <button
    type={type}
    className={`${styles.primaryBtn} ${accent ? styles.primaryBtnAccent : styles.primaryBtnTonal} `} 
    style={{
      height: height,
    }}
    onClick={onClick}
  >
    {title}
  </button>
)