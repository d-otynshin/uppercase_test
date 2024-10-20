import React, { useCallback } from "react";
import searchLogo from "../../assets/Search.svg";
import "./SearchBar.css";

const debounce = (cb, delay) => {
  let timer;

  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export const SearchBar = ({ setSearch }: any) => {
  const handleSearch = useCallback(
    debounce((e) => {
      const query = e.target.value;
      setSearch((search: any) => ({ ...search, query }));
    }, 500),
    []
  );

  return (
    <div className='search-bar__container'>
      <input
        placeholder='search...'
        onChange={handleSearch}
        className='search-bar'
      />
      <img src={searchLogo} alt='search logo' />
    </div>
  );
};
