import React from "react";
import upperLogo from "../../assets/logo_upper.svg";
import { SearchBar } from "../search-bar/SearchBar.tsx";
import { User } from "../user/User.tsx";
import "./Header.css";

export const Header = ({ setQuery }: any) => {
  return (
    <header className='header'>
      <img src={upperLogo} alt='UPPERSETUP Logo' title='UPPERSETUP' />
      <SearchBar setQuery={setQuery} />
      <User />
    </header>
  );
};
