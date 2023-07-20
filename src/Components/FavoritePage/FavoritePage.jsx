import { useDispatch, useSelector } from 'react-redux';
import { Goods } from '../Goods/Goods';
import { useEffect } from 'react';
import { fetchCategory} from '../../Features/goodsSlice';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';

export const FavoritePage = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const page = usePageFromSearchParams(dispatch);
  
  useEffect(() => {
    if (favorites) {
      const params = { list: favorites }
      if (page) {
        params.page = page;
      }
      dispatch(fetchCategory(params));
    }
  }, [dispatch, page, favorites]);

  return <Goods title='Избранное' />;
};
