import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCategory, fetchGender } from '../../Features/goodsSlice';
import { useParams } from 'react-router-dom';
import { setActiveGender } from '../../Features/navigationSlice';
import { Goods } from '../Goods/Goods';
import { Banner } from '../Banner/Banner';

export const MainPage = () => {
  const { category, gender } = useParams();
  const dispatch = useDispatch();
  const { activeGender, categories } = useSelector((state) => state.navigation);
  const genderData = categories[activeGender];

  useEffect(() => {
    dispatch(setActiveGender(gender));
  }, [gender, dispatch]);

  useEffect(() => {
    if (gender && category) {
      dispatch(fetchCategory({ category, gender }));
      return;
    }
    if (gender) {
      dispatch(fetchGender(gender));
      return;
    }
  }, [gender, category, dispatch]);

  return (
    <>
      <Banner data={genderData?.banner} />
      <Goods categoryData={genderData?.list?.find((item) => item.slug === category)} />
    </>
  );
};
