import { technologies } from "@/constants/processData"
import styles from './styles.module.scss'
import { RouterLink } from "@/components/links/routerLink"
import { linkSizes } from "@/utils/setLinkStyles"
import { routesNames } from "@/constants/routesNames"

export const Badges = () => (
  <section className={`container ${styles.section}`}>
    <h2 className={styles.title}>Fresh opportunities</h2>
    <p className={styles.subTitle}>Most people are looking for this kind of job</p>

    <ul className={styles.list}>
      {technologies.map((el) => (
        <li
          key={el.name}
          style={{
            color: el.color,
            border: `1px solid ${el.color}`
          }}
          className={styles.badge}
        >
          {el.name}
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