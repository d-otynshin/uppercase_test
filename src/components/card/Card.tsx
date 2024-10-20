import React from "react";
import ImagePlaceholder from "../../assets/placeholder-image.png";
import { TMovie } from "../cards/Cards";
import "./Card.css";

export const Card = ({ item }: { item: TMovie }) => {
  return (
    <div className='card__container'>
      <div className='card__image'>
        {item?.Poster !== "N/A" ? (
          <img
            className='card__image-poster'
            src={item?.Poster}
            alt='placeholder'
          />
        ) : (
          <img
            className='card__image-placeholder'
            src={ImagePlaceholder}
            alt='placeholder'
          />
        )}
      </div>

      <ul className='card__description'>
        <li className='card__description_item'>Name: {item?.Title}</li>
        <li className='card__description_item'>Year: {item?.Year}</li>
        <li className='card__description_item'>imdbID: {item?.imdbID}</li>
        <li className='card__description_item'>Type: {item?.Type}</li>
      </ul>
    </div>
  );
};
