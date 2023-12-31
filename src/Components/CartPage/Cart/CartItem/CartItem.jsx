import { useDispatch, useSelector } from 'react-redux';
import s from './CartItem.module.scss';
import { API_URL } from '../../../../const';
import cn from 'classnames';
import { Count } from '../../../Count/Count';
import { addToCart, removeFromCart } from '../../../../Features/cartSlice';

export const CartItem = ({ id, color, size, count, goodsList }) => {
  const { colorList } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  const item = goodsList.find((item) => item.id === id);

  const handleCountChange = (count) => {
    dispatch(addToCart({ id, size, color, count }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id, size, color }));
  };

  return (
    <article className={s.item}>
      <img
        className={s.image}
        src={`${API_URL}${item?.pic}`}
        alt={item?.title}
      />
      <div className={s.content}>
        <h3 className={s.title}>{item?.title}</h3>
        <p className={s.price}>tenge {item?.price}</p>
        <div className={s.vendorCode}>
          <span className={s.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
      </div>

      <div className={s.prop}>
        <div className={s.color}>
          <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
          <div
            className={s.colorItem}
            style={{
              '--data-color': colorList?.find((item) => item.title === color)
                ?.code,
            }}></div>
        </div>
        <div className={s.size}>
          <p className={cn(s.subtitle, s.sizeTitle)}>Размер</p>
          <div className={s.sizeItem}>{size}</div>
        </div>
      </div>

      <button onClick={handleRemoveItem} className={s.del} aria-label='Удалить товар из корзины'></button>
      <Count
        className={s.count}
        count={count}
        handleDecrement={() => {
          if (count > 1) {
            handleCountChange(count - 1);
          }
        }}
        handleIncrement={() => {
          handleCountChange(count + 1);
        }}
      />
    </article>
  );
};
