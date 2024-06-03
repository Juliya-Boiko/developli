import { routesNames } from "@/constants/routesNames";
import Link from 'next/link'
import styles from './styles.module.scss'

export const NavList = () => {
  const navLinks = [
    {
      title: 'Employers',
      path: routesNames.Employers
    },
    {
      title: 'Candidates',
      path: routesNames.Candidated
    },
    {
      title: 'Company',
      path: routesNames.About
    },
    {
      title: 'Blog',
      path: routesNames.Blog
    },
  ]

  return (
    <nav className={styles.navList}>
      {navLinks.map((el) => {
        return <Link key={el.title} href={el.path}>{el.title}</Link>
      })}
    </nav>
  );
}