import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setPage } from '../Features/goodsSlice';


export const usePageFromSearchParams = (dispatch) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageURL = +searchParams.get('page') || 1;

  useEffect(() => {
    dispatch(setPage(pageURL));
  }, [pageURL, dispatch]);

  return pageURL;
};
