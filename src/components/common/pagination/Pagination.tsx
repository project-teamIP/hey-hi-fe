import React from "react";
import * as S from "./style";
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  return (
    <S.PaginationBox>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.2555 13.5292L17.8242 19.098L16.4534 20.4687L9.5139 13.5292L16.4534 6.58968L17.8242 7.96046L12.2555 13.5292Z"
            fill={currentPage === 1 ? "#BFC5CB" : "#3F3F3F"}
          />
        </svg>
      </button>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            style={{ fontWeight: currentPage === index + 1 ? "bold" : "normal" }}>
            {index + 1}
          </button>
        ))}
      </div>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <svg
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.7445 13.4708L9.17578 7.90203L10.5466 6.53125L17.4861 13.4708L10.5466 20.4103L9.17578 19.0395L14.7445 13.4708Z"
            fill={currentPage === totalPages ? "#BFC5CB" : "#3F3F3F"}
          />
        </svg>
      </button>
    </S.PaginationBox>
  );
};

export default Pagination;
