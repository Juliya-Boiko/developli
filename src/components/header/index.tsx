import { Logo } from "../logo"
import { NavList } from "./navigation"
import { Actions } from "./actions"

export const Header = () => {
  return (
    <header className="">
      <Logo />
      <NavList />
      <Actions />
    </header>
  );
}