import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory } from '../../Features/goodsSlice';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';
import s from './FavoritePage.module.scss';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const params = { list: favorites };
      if (page) {
        params.page = page;
      }
      dispatch(fetchCategory(params));
    }
  }, [dispatch, page, favorites]);

  return favorites.length ? (
    <Goods title='Избранное' />
  ) : (
    <h3 className={s.empty}>Вы ничего не добавили в избранное</h3>
  );
};
