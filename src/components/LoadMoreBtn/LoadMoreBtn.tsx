import React from 'react';
import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  handleLoadMoreBtnClick: () => void;
};

function LoadMoreBtn({ handleLoadMoreBtnClick }: LoadMoreBtnProps): JSX.Element  {
  return (
    <div className={css.seeMoreBtnWrapper}>
      <button
        className={css.seeMoreBtn}
        type="button"
        onClick={handleLoadMoreBtnClick}
      >
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;