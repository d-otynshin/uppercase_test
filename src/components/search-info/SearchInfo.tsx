import React from "react";
import "./SearchInfo.css";

interface ISearchInfo {
  searchedText: string;
  foundMoviesCount: number;
}

export const SearchInfo = ({ searchedText, foundMoviesCount }: ISearchInfo) => {
  return (
    <div className='search-info__container'>
      <div className='search-info__text'>
        <span>You searched for:</span>
        <span>{searchedText}</span>
      </div>
      <div className='search-info__count'>{foundMoviesCount} results</div>
    </div>
  );
};
