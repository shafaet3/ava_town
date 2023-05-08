import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./pagination.module.css";
import { DOTS, usePagination } from "./usePagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={styles.paginationContainer}>
      <li
        className={`${styles.paginationItem} ${
          currentPage === 1 ? styles.disabled : ""
        }`}
        onClick={onPrevious}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="paginationItem dots">&#8230;</li>;
        }

        return (
          <li
            className={`${styles.paginationItem} ${
              pageNumber === currentPage ? styles.selected : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles.paginationItem} ${
          currentPage === lastPage ? styles.disabled : ""
        }`}
        onClick={onNext}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </li>
    </ul>
  );
};

export default Pagination;
