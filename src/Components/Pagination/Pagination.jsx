import { NavLink, useLocation } from 'react-router-dom';
import s from './Pagination.module.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useEffect, useState } from 'react';

export const Pagination = () => {
  const [pagePagination, setPagePagination] = useState('');
  const pathName = useLocation().pathname;
  const { page, pages } = useSelector((state) => state.goods);

  useEffect(() => {
    setPagePagination(page)
  }, [page, setPagePagination])

  const handlePageChange = (newPage => {
    setPagePagination(newPage);
  });

  const renderPaginationItems = () => {
    const paginationItems = [];
    let startPage = (pagePagination === pages) && (pages >= 3)
      ? pagePagination - 2 : Math.max(1, pagePagination - 1);
    let endPage = Math.min(startPage + 2, pages);
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={s.item}>
          <NavLink
            to={`${pathName}?page=${i}`}
            className={cn(s.link, i === pagePagination ?? s.linkActive)}
            onClick={() => handlePageChange(i)}>
            {i}
          </NavLink>
        </li>
      );
    }
    return paginationItems;
  };

  const handlePrevPage = () => {
    if (pagePagination < pages) {
      handlePageChange(pagePagination - 1);
    }
  };

  const handleNextPage = () => {
    if (pagePagination > 1) {
      handlePageChange(pagePagination + 1);
    }
  };

  return (
    pages > 1 && 
    <div className={s.pagination}>
      <button className={s.arrow}
        onClick={handlePrevPage}
        disabled={pagePagination <= 2}
      >
        &lt;
      </button>
      <ul className={s.list}>{renderPaginationItems()}</ul>
      <button
        className={s.arrow}
        onClick={handleNextPage}
        disabled={pagePagination >= pages - 1 || pages <= 3}
      >
        &gt;
      </button>
    </div>
  );
};
