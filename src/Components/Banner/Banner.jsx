import { NavLink } from 'react-router-dom';
import { Container } from '../Layout/Container/Container';
import { API_URL } from '../../const';
import { useMedia } from 'react-use';
import s from './Banner.module.scss';
import { useEffect } from 'react';

export const Banner = ({...data}) => {
  const isMobile = useMedia('(max-width: 540px)');
  const isTablet = useMedia('(max-width: 768px)');
  const isLaptop = useMedia('(max-width: 1024px)');

  useEffect(() => {
    if (isMobile) {
      return {backgroundImage: `url(${API_URL}${data.bg.mob})`};
    } else if (isTablet) {
      return {backgroundImage: `url(${API_URL}${data.bg.tablet})`};
    } else if (isLaptop) {
      return { backgroundImage: `url(${API_URL}${data.bg.laptop})` };
    } else {
      return { backgroundImage: `url(${API_URL}${data.bg.desktop})` };
    }

}, [isMobile, isTablet, isLaptop]);

  return (
    data && (
      <section
        className={s.banner}
        style={{ backgroundImage: `url(${API_URL}${data.bg.desktop})` }}>
        <Container>
          <div className={s.content}>
            <h2 className={s.title}>{data.description}</h2>
            <NavLink className={s.link} to={`/product/${data.id}`}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};
