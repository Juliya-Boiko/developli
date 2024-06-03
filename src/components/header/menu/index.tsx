"use client"
import Image from 'next/image'
import svgMenu from '../../../../public/icons/menu.svg'
import svgClose from '../../../../public/icons/close.svg'
import styles from './styles.module.scss'
import { useState } from 'react';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.menu}>
      <button type="button" className={styles.btnOpen} onClick={toggleMenu}>
        <Image src={isOpen ? svgClose : svgMenu} alt="Menu" width={24} height={24} />
      </button>
    </div>
  );
}