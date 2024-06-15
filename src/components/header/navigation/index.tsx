import { routesNames } from "@/constants/routesNames";
import Link from 'next/link'
import styles from './styles.module.scss'
import { title } from "process";

export const NavList = () => {
  const navLinks = [
    {
      title: 'Jobs',
      path: routesNames.Jobs
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
    {
      title: 'FAQ',
      path: routesNames.Faq
    },
    {
      title: 'Contacts',
      path: routesNames.Contacts
    }
  ]

  return (
    <nav className={styles.navList}>
      {navLinks.map((el) => {
        return <Link key={el.title} href={el.path} className={styles.navItem}>{el.title}</Link>
      })}
    </nav>
  );
}