"use client"
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import { useState } from 'react';
import { assetsSrc } from '@/utils/assets'
import { Logo } from '@/components/logo';
import { navList } from '@/constants/routesNames'
import { AuthLink } from '@/components/links/authLink'
import { routesNames } from '@/constants/routesNames'
import { RouterLink } from '@/components/links/routerLink'
import { linkSizes } from '@/utils/setLinkStyles'
import { ArrowExpand } from '@/components/svg/ArrowExpand';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<string | null>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDropdown = (str: string) => {
    if (selected === str) {
      setSelected(null)
    } else {
      setSelected(str)
    }
  }

  return (
    <div className={styles.menu}>
      <button type="button" className={styles.btnOpen} onClick={toggleMenu}>
        <Image src={assetsSrc.menu} alt="Menu" width={24} height={24} />
      </button>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={`container ${styles.content}`}>
            <div className={styles.separated}>
              <div>
                <div className={styles.head}>
                  <Logo />
                  <button type="button" className={styles.btnOpen} onClick={toggleMenu}>
                    <Image src={assetsSrc.cross} alt="Close" width={24} height={24} />
                  </button>
                </div>
                <ul className={styles.list}>
                  {navList.map((el) => (
                    <li key={el.title} onClick={() => toggleDropdown(el.title)}>
                      <button
                        type="button"
                        className={styles.btnExpand}
                        style={{
                          backgroundColor: selected === el.title ? '#47D18C' : 'transparent',
                          color: selected === el.title ? '#fff' : '#7F879E',

                        }}
                      >
                        <span>{el.title}</span>
                        <ArrowExpand color={selected === el.title ? '#fff' : '#7F879E'} />
                      </button>
                      {selected === el.title && (
                        <ul className={styles.links}>
                          {el.list.map((link) => (
                            <li key={link.title} className={styles.link}>
                              <Link href={link.route}>{link.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className={styles.auth}>
                  <AuthLink title="Login" path={routesNames.Index} />
                </div>
              </div>
              <div className={styles.actions}>
                <div onClick={() => setIsOpen(false)}>
                  <RouterLink
                    title="Find a job"
                    primary
                    height={linkSizes.Big}
                    path={routesNames.Index}
                  />
                </div>
                <div onClick={() => setIsOpen(false)}>
                  <RouterLink
                    title="Start hiring"
                    height={linkSizes.Big}
                    path={routesNames.Index}
                  />  
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}