import React from 'react';

const Pagination = (props) => {

  const { totalpage, currentPage, handlePageChange } = props;
  const pageNos = [];

  for (let i = 1; i <= totalpage; i++) {
    pageNos.push(  
      <button key={i} onClick={() => handlePageChange(i)} className={i === currentPage ? 'active' : ''}>
        {i}
      </button>
    );
  }
  return <div className="pagination">{pageNos}</div>;
};

export default Pagination;
