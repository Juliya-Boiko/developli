"use client"
import Image from 'next/image'
import styles from './styles.module.scss'
import { ButtonCardProps } from "../type"

export const BtnCart = ({ icon, onClick }: ButtonCardProps) => (
  <button
    type="button"
    className={styles.btnCard} 
    onClick={onClick}
  >
    <Image src={icon} alt="arrow" width={24} height={24} />
  </button>
)