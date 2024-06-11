"use client"
import { searchTags } from "@/constants/processData"
import styles from './styles.module.scss'
import { RouterLink } from "@/components/links/routerLink"
import { linkSizes } from "@/utils/setLinkStyles"
import { routesNames } from "@/constants/routesNames"
import { useState } from "react"

export const Badges = () => {
  const [badges, setBadges] = useState<string[]>([])

  const toggleBadge = (badge: string) => {
    setBadges((prevBadges) => {
      if (prevBadges.includes(badge)) {
        return prevBadges.filter((b) => b !== badge);
      } else {
        return [...prevBadges, badge];
      }
    });
  }

  return (
    <section className={`container ${styles.section}`}>
      <h2 className={styles.title}><span className="accent-green">Fresh</span> opportunities</h2>
      <p className={styles.subTitle}>Most people are looking for this kind of job</p>

      <ul className={styles.list}>
        {searchTags.map((el) => (
          <li
            key={el.name}
            style={{
              color: badges.includes(el.name) ? '#FFF' : el.color,
              border: `1px solid ${el.color}`,
              backgroundColor: badges.includes(el.name) ? el.color : 'transparent'
            }}
            className={styles.badge}
          >
            <button type="button" onClick={() => toggleBadge(el.name)}>{el.name}</button>
          </li>
        ))}
      </ul>

      <RouterLink
        title="Find a job"
        primary
        icon
        height={linkSizes.Big}
        path={routesNames.Search}
      />
    </section>
  )
}