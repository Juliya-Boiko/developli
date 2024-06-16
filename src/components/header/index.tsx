import styles from './styles.module.scss'
import { Logo } from '../logo'
import { NavList } from "./navigation"
import { Menu } from "./menu"
import { AuthLink } from "../links/authLink"
import { routesNames } from "@/constants/routesNames"
import { RouterLink } from '@/components/links/routerLink'
import { linkSizes } from '@/utils/setLinkStyles'

export const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <Logo />
      <NavList />
      <div className='mobileHidden'>
        <AuthLink title="Login" path={routesNames.Index} />
      </div>

      <div className={styles.actionsContainer}>
        <RouterLink
          title="Find a job"
          primary
          height={linkSizes.Small}
          path={routesNames.Index}
        />
        <RouterLink
          title="Start hiring"
          height={linkSizes.Small}
          path={routesNames.Index}
        />
      </div>
      <Menu />
    </header>
  );
}