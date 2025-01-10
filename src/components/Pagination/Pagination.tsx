"use client";
import React from "react";
import Button from "@/components/Button";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const visiblePages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 3) {
      return [1, 2, 3, "...", totalPages];
    }
    if (currentPage >= totalPages - 2) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }
    return [1, "...", currentPage, "...", totalPages];
  };

  const buttonShape = "px-3 py-1 rounded-md";

  function handlePageChange(newPage: number) {
    return () => {
      onPageChange(newPage);
    };
  }

  if (!totalPages) return null;

  return (
    <nav
      aria-labelledby="pagination"
      className="flex items-center justify-center  mt-4"
    >
      <h2 id="pagination" className="sr-only">
        Pagination
      </h2>
      <ul className="flex items-center justify-center space-x-2 mt-4">
        <li>
          <Button
            onClick={handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${buttonShape}`}
            aria-label="Go to previous page"
          >
            Prev
          </Button>
        </li>
        {visiblePages().map((page, index) =>
          typeof page === "number" ? (
            <li key={page}>
              <Button
                aria-label={"Go to page " + page}
                aria-selected={page === currentPage}
                active={page === currentPage}
                className={`${buttonShape}`}
                onClick={handlePageChange(page)}
              >
                {page}
              </Button>
            </li>
          ) : (
            <li key={`ellipsis-${index}`}>
              <span className="px-3 py-1 text-gray-500 select-none">...</span>
            </li>
          ),
        )}
        <li>
          <Button
            aria-label={"Go to next page"}
            onClick={handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages || !totalPages}
            className={`${buttonShape}`}
          >
            Next
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
