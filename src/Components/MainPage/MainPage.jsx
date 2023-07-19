import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../Features/goodsSlice';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../Features/navigationSlice';
import { Banner } from '../Banner/Banner';
import { Goods } from '../Goods/Goods';
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';

export const MainPage = () => {
  const { category, gender } = useParams();
  const dispatch = useDispatch();
  const { activeGender, categories, genderList } = useSelector((state) => state.navigation);
  const genderData = categories[activeGender];
  const categoryData = genderData?.list?.find((item) => item.slug === category);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (gender) {
      dispatch(setActiveGender(gender));
    }
    else if (genderList[0]) {
      dispatch(setActiveGender(genderList[0]));
      dispatch(fetchGender(genderList[0]));
    }
  }, [gender, genderList, dispatch]);

  useEffect(() => {
    if (gender && category) {
      const params = { category, gender };
      if (page) {
        params.page = page;
      }
      dispatch(fetchCategory(params));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, page, dispatch]);

  return (
    <>
      {!category && <Banner data={genderData?.banner} />}
      <Goods
        title={categoryData?.title} />
    </>
  );
};
