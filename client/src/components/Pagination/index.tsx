import React from 'react';
import ReactPaginate from 'react-paginate';
// @ts-ignore
// import styles from './Pagination.module.scss';

interface IProps {
  currentPage?: number;
  onChangePage?: (page: number) => void;
};

export const Pagination: React.FC<IProps> = ({ currentPage, onChangePage }) => (
  <ReactPaginate
    // className={styles.root}
    breakLabel="..."
    nextLabel=">"
    previousLabel="<"
    // @ts-ignore
    onPageChange={(event) => onChangePage(event.selected + 1)}
    pageRangeDisplayed={4}
    pageCount={3}
    // @ts-ignore
    forcePage={currentPage - 1}
  />
);
