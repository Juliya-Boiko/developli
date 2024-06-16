"use client"
import { navList } from "@/constants/routesNames";
import Link from 'next/link'
import styles from './styles.module.scss'
import { useState } from "react";

export const NavList = () => {
  const [showList, setShowList] = useState<string | null>(null)

  return (
    <nav className={styles.navList}>
      {navList.map((el) => (
        <div key={el.title} className={styles.wrapper}>
          <p
            className={styles.title}
            onMouseEnter={() => setShowList(el.title)}
          >
            {el.title}
          </p>
          <ul
            className={styles.list}
            style={{
              display: showList === el.title ? 'block' : 'none'
            }}
            onMouseLeave={() => setShowList(null)}
          >
            {el.list.map((item) => (
              <li key={item.title} className={styles.link}>
                <Link href={item.route}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}