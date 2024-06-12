"use client"
import { QuestionCardProps } from "./type"
import styles from './styles.module.scss'
import svgPlus from '../../../../public/icons/plus.svg'
import svgMinus from '../../../../public/icons/minus.svg'
import Image from 'next/image'
import { useState } from "react"



export const QuestionCard = ({ question, answer }: QuestionCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <li className={styles.card}>
      <div className={styles.head}>
        <p
          className={styles.cardTitle}
          style={{
            marginBottom: isOpen ? '16px' : 0
          }}
        >
          {question}
        </p>
        <button type="button" onClick={toggleOpen}>
          {isOpen ? <Image src={svgMinus} alt='close' width={20} height={20} /> : <Image src={svgPlus} alt='open' width={20} height={20} />}
        </button>
      </div>
      {isOpen && <p>{answer}</p>}
    </li>
  )
}