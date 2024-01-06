import React from "react";

function PageNumberButtons({
  pageNumber,
  increasePageNumber,
  decreasePageNumber,
}) {
  return (
    <div className="pagination">
      <div className="left" onClick={decreasePageNumber}>
        {"<"}
      </div>
      <div className="page-number">Page: {pageNumber}</div>
      <div className="right" onClick={increasePageNumber}>
        {">"}
      </div>
    </div>
  );
}

export default PageNumberButtons;
