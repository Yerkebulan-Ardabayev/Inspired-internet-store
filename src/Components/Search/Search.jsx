import { Form, Formik } from 'formik';
import { Container } from '../Layout/Container/Container';
import s from './Search.module.scss';
import { useSelector } from 'react-redux';

export const Search = () => {
  const { openSearch } = useSelector(state => state.search);
  
  return (
  openSearch &&  <div className={s.search}>
      <Container>
        <Formik>
          <Form className={s.form}>
            <input
              className={s.input}
              type='search'
              name='search'
              placeholder='Найти...'
            />
            <button className={s.btn}>Искать</button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};
