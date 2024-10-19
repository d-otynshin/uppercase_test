import React from "react";
import searchLogo from "../../assets/Search.svg";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className='search-bar__container'>
      <input placeholder='upperstep' className='search-bar' />
      <img src={searchLogo} alt='search logo' />
    </div>
  );
};
