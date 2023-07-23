import { useLocation, useNavigate, useRouteError } from 'react-router-dom';
import s from './ErrorPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchNavigation } from '../../Features/navigationSlice';
import { fetchColors } from '../../Features/colorSlice';

export const ErrorPage = () => {
  const error = useRouteError();
  const { status } = useSelector((state) => state.statusServer);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === '/404') {
      navigate('/');
    }
  }, [location, status, navigate]);

  useEffect(() => {
    if (!status && location.pathname === '/404') {
      clearTimeout(timerIdRef.current);

      timerIdRef.current = setTimeout(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
      }, 2000);
    }
    return () => {
      clearTimeout(timerIdRef.current);
    };
  }, [dispatch, location, status]);

  return (
    <div className={s.error}>
      <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
      <p className={s.message}>{error?.message || 'Неизвестная ошибка'}</p>
    </div>
  );
};
