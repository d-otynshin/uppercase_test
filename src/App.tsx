import React from "react";
import { Header } from "./components/header/Header.tsx";
import { SearchInfo } from "./components/search-info/SearchInfo.tsx";
import { Cards } from "./components/cards/Cards.tsx";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <SearchInfo searchedText={"Batman"} foundMoviesCount={312} />
      <Cards />
    </div>
  );
}

export default App;
