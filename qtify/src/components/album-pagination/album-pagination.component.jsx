import { Fragment } from "react";

import "./album-pagination.styles.css";

import { ReactComponent as PrevPage } from "../../assets/prev-page/prev-page.svg";
import { ReactComponent as NextPage } from "../../assets/next-page/next-page.svg";

const AlbumPagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const goToPreviousHandler = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  const goToNextHandler = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  return (
    <div className="album-pagination-container">
      <button className="pagination-button-left" onClick={goToPreviousHandler}>
        <PrevPage />
      </button>
      {totalPages <= 3 ? (
        [...new Array(totalPages)].map((_, idx) => (
          <button
            className={`${
              idx + 1 === currentPage ? "selected" : "pagination-button"
            }`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))
      ) : (
        <Fragment>
          {currentPage <= 3 && currentPage + 2 < totalPages ? (
            <div className="pagination-page-number-container">
              <div>
                {[...new Array(3)].map((_, idx) => {
                  const pageNum = idx + 1;
                  return (
                    <button
                      key={Math.random()}
                      className={`${
                        pageNum === currentPage
                          ? "selected"
                          : "pagination-button"
                      }`}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <span>&nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;.&nbsp;</span>
              <div>
                <button
                  className={`${
                    totalPages === currentPage
                      ? "selected"
                      : "pagination-button"
                  }`}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </button>
              </div>
            </div>
          ) : currentPage > 3 && currentPage + 2 < totalPages ? (
            <div className="pagination-page-number-container">
              <div>
                {[...new Array(3)].map((_, idx) => {
                  const pageNum = currentPage - 2 + idx;
                  return (
                    <button
                      key={Math.random()}
                      className={`${
                        pageNum === currentPage
                          ? "selected"
                          : "pagination-button"
                      }`}
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>
              <span>&nbsp;.&nbsp;&nbsp;.&nbsp;&nbsp;.&nbsp;</span>
              <div>
                <button
                  className={`${
                    totalPages === currentPage
                      ? "selected"
                      : "pagination-button"
                  }`}
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </button>
              </div>
            </div>
          ) : (
            <div className="pagination-page-number-container">
              <button
                className={`${
                  1 === currentPage ? "selected" : "pagination-button"
                }`}
                onClick={() => setCurrentPage(1)}
              >
                1
              </button>
              <span>. . .</span>
              {[...new Array(3)].map((_, idx) => {
                const pageNum = totalPages - 2 + idx;
                return (
                  <button
                    className={`${
                      pageNum === currentPage ? "selected" : "pagination-button"
                    }`}
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>
          )}
        </Fragment>
      )}
      <button className="pagination-button-right" onClick={goToNextHandler}>
        <NextPage />
      </button>
    </div>
  );
};

export default AlbumPagination;
