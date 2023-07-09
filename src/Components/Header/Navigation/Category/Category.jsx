import { NavLink } from 'react-router-dom';
import s from './Category.module.scss';
import cn from 'classnames';
import { useSelector } from 'react-redux';

// const location = useLocation();
// const gender = location.pathname.split('/')[1] || 'women';
//const categoriesList = list.find((item) => item.link === gender);

export const Category = () => {
  const { activeGender, categories } = useSelector((state) => state.navigation);

  return (
    <ul className={s.category}>
      {categories[activeGender]?.list?.map((item) => (
        <li key={item.slug} className={s.item}>
          <NavLink
            to={`/catalog/${activeGender}/${item.slug}`}
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
