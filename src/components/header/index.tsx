import styles from './styles.module.scss'
import { Logo } from "../logo"
import { NavList } from "./navigation"
import { Actions } from "./actions"
import { Menu } from "./menu"
import { AuthLink } from "../links/authLink"
import { routesNames } from "@/constants/routesNames"

export const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <Logo />
      <NavList />
      <AuthLink title="Login" path={routesNames.Index} />
      <Actions />
      <Menu />
    </header>
  );
}