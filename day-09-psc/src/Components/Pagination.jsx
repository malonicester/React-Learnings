import React from "react";

function Pagination({ page, handlePageChange, totalCount }) {
  return (
    <div>
      {/* <div id="pagination-container">
        <button
          disabled={page === 1}
          onClick={handlePageChange(-1)}
        >
          Previous
        </button>
        <button disabled>{page}</button>
        <button onClick={handlePageChange(1)}>Next</button>
      </div> */}
    </div>
  );
}

export default Pagination;
