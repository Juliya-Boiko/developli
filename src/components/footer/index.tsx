import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '../logo'
import { socialsList } from '@/constants/socials'
import { routesNames, navList } from '@/constants/routesNames'

export const Footer = () => (
  <footer className={styles.footer}>
    
    <div className={`container ${styles.content}`}>
      <div className={styles.links}>
        <div className={styles.address}>
          <Logo />
          <p className={styles.text}>Rouwais Dist, Jeddah Rouwais Saudi Arabia</p>
          <a className={styles.text} href="tel:+00966 2 6676760">00966 2 6676760</a>
        </div>
        <ul className={styles.nav}>
          {navList.map((el) => (
            <li key={el.title}>
              <p className={styles.title}>{el.title}</p>
              <ul className={styles.list}>
                {el.list.map((route) => (
                  <li key={route.title} className={styles.navLink}>
                    <Link href={route.route}>{route.title}</Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.info}>
        <span>Copyright © 2024</span>
        <Link href={routesNames.PrivacyPolicy} className={styles.policy}>Terms of Service & Privacy policy</Link>
        <ul className={styles.socials}>
          {socialsList.map((el) => (
            <li key={el.title}>
              <a href={el.link}>
                <Image src={el.icon} alt="Logo" width={40} height={40}  />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)
  