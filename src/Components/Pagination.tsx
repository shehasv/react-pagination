import { useState } from 'react';
import './Pagination.css';

const Pagination = ({
  totalPages,
  currentPage,
  updatePage,
  packetSize,
  updatePacketSize,
}) => {
  return (
    <div className="pagination">
      <div
        disabled={currentPage === 0}
        onClick={() => {
          updatePage(currentPage - 1);
        }}
      >
        ⬅️
      </div>
      {[...Array.from({ length: totalPages }, (_, i) => i)].map((number) => (
        <div
          className={currentPage == number ? 'active' : ''}
          key={number + ''}
          onClick={() => {
            updatePage(number);
          }}
        >
          {number + 1}
        </div>
      ))}
      <div
        disabled={currentPage === totalPages - 1}
        onClick={() => {
          updatePage(currentPage + 1);
        }}
      >
        ➡️
      </div>
      Page Size
      <select
        value={packetSize}
        onChange={(event) => {
          updatePage(0)
          updatePacketSize(+event.target.value);
        }}
      >
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  );
};

export default Pagination;
