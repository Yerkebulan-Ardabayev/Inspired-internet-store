import { Container } from '../../Layout/Container/Container';
import s from './Top.module.scss';
import cn from 'classnames';
import logo from '../../../assets/logo.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { ReactComponent as CardSVG } from '../../../assets/card.svg';
import { ReactComponent as HeardSVG } from '../../../assets/heart.svg';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSearch } from '../../../Features/searchSlice';

export const Top = () => {
  const { countItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleOpenSearch = () => {
    dispatch(toggleSearch())
  }

  return (
    <div className={s.top}>
      <Container className={s.container}>
        <a className={cn(s.link, s.phone)} href='tel:+77015355758'>
          +7 701 535 57 58
        </a>
        <NavLink className={s.logo} to='/'>
          <img src={logo} alt='Logotype Inspired' />
        </NavLink>
        <div className={s.navigation}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <button className={s.link} onClick={handleOpenSearch}>
                <SearchSVG />
              </button>
            </li>
            <li className={s.navItem}>
              <NavLink className={s.link} to='/cart'>
                <CardSVG />
                <span className={s.linkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li className={s.navItem}>
              <NavLink className={cn(s.link, s.like)} to='/favorite'>
                <HeardSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
