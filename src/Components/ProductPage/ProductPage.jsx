import { useEffect, useState } from 'react';
import { Container } from '../Layout/Container/Container';
import s from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../Features/productSlice';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';
import cn from 'classnames';
import { ColorList } from '../ColorList/ColorList';
import { ProductSize } from '../ProductSize/ProductSize';
import { Count } from '../Count/Count';
import { Goods } from '../Goods/Goods';
import { fetchCategory } from '../../Features/goodsSlice';
import { BtnLike } from '../BtnLike/BtnLike';

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { gender, category } = product;
  const [selectedColor, setSelectedColor] = useState('');
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(
      fetchCategory({ category, gender, count: 4, top: true, exclude: id })
    );
  }, [gender, category, id, dispatch]);

  return (
    <>
      <section className={s.card}>
        <Container className={s.container}>
          <img
            className={s.image}
            src={`${API_URL}${product.pic}`}
            alt={`${product.title}`}
          />
          <form className={s.content}>
            <h2 className={s.title}>{product.title}</h2>
            <p className={s.price}>тенге {product.price}</p>
            <div className={s.vendorCode}>
              <span className={s.subtitle}>Артикул</span>
              <span className={s.id}>{product.id}</span>
            </div>
            <div className={s.color}>
              <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
              <ColorList
                selectedColor={selectedColor}
                handleColorChange={handleColorChange}
                colors={product.colors}
              />
            </div>
            <ProductSize
              size={product.size}
              selectedSize={selectedSize}
              handleSizeChange={handleSizeChange}
            />
            <div className={s.description}>
              <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
              <p className={s.descriptionText}>{product.description}</p>
            </div>

            <div className={s.control}>
              <Count
                className={s.count}
                count={count}
                handleDecrement={handleDecrement}
                handleIncrement={handleIncrement}
              />

              <button className={s.addCart} type='submit'>
                В корзину
              </button>
              <BtnLike id={id} />
            </div>
          </form>
        </Container>
      </section>
      <Goods title='Вам также может понравится' />
    </>
  );
};
