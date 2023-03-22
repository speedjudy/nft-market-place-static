import React from 'react';
import Link from 'next/link'

const Pagination = () => {
  return (
    <>
      <div className='col-lg-12 col-md-12 text-center'>
        <div className='pagination-area'>
          <a href='#' className='prev page-numbers'>
            <i className='ri-arrow-left-s-line'></i>
          </a>

          <span className='page-numbers current' aria-current='page'>
            1
          </span>
          <a href='#' className='page-numbers'>
            2
          </a>
          <a href='#' className='page-numbers'>
            3
          </a>

          <a href='#' className='next page-numbers'>
            <i className='ri-arrow-right-s-line'></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Pagination;
