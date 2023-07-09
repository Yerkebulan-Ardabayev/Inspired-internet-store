import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Root } from './Routes/Root';
import { MainPage } from './Components/MainPage/MainPage';
import { ErrorPage } from './Components/ErrorPage/ErrorPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './Features/navigationSlice';
import { fetchColors } from './Features/colorSlice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='catalog/:gender/:category?' element={<MainPage/>} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors())
  }, [dispatch])

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}
