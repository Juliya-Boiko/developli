import { Logo } from "../logo"
import { NavList } from "./navigation"
import { Actions } from "./actions"
import { BtnLogin } from "../buttons/login"
import { Menu } from "./menu"
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={`container ${styles.header}`}>
      <Logo />
      <NavList />
      <BtnLogin onClick={() => console.log('Btn Login')} />
      <Actions />
      <Menu />
    </header>
  );
}