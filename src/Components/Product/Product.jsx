import { API_URL } from '../../const';
import { NavLink } from 'react-router-dom';
import s from './Product.module.scss';
import { ColorList } from '../ColorList/ColorList';
import { BtnLike } from '../BtnLike/BtnLike';
import { Img } from '../Img/Img';

export const Product = ({ id, pic, title, price, colors, description }) => {
  return (
    <article className={s.product}>
      <NavLink className={s.link} to={`/product/${id}`}>
        <Img
          className={s.image}
          src={`${API_URL}${pic}`}
          alt={`${title} ${description}`}
        />
        <h3 className={s.title}>{title}</h3>
      </NavLink>
      <div className={s.row}>
        <p className={s.price}>{price} tenge</p>
        <BtnLike id={id} />
      </div>
      <ColorList colors={colors} />
    </article>
  );
};
