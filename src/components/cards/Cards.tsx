import React from "react";
import { Card } from "../card/Card.tsx";
import { Loader } from "../loader/Loader.tsx";
import "./Cards.css";

interface ICards {
  query: string;
  movies: any[];
  isFetching: boolean;
}

export type TMovie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export const Cards = ({ query, movies, isFetching }: ICards) => {
  if (isFetching) {
    return <Loader />;
  }

  if (!movies?.length && query) {
    return "No movies...";
  }

  return (
    <div className='cards__container'>
      {movies?.map((movie: TMovie, index: number) => {
        return <Card item={movie} key={index} />;
      })}
    </div>
  );
};
