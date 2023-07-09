import { Navigation } from "./Navigation/Navigation"
import { Top } from "./Top/Top";
import s from './Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <Top />
      <Navigation />
    </header>
  )
}