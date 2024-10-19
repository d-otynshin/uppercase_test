import React from "react";
import ImagePlaceholder from "../../assets/placeholder-image.png";
import "./Card.css";

export const Card = () => {
  return (
    <div className='card__container'>
      <div className='card__image'>
        <img
          className='card__image-placeholder'
          src={ImagePlaceholder}
          alt='placeholder'
        />
      </div>

      <ul className='card__description'>
        <li className='card__description_item'>Name: {}</li>
        <li className='card__description_item'>Year: {}</li>
        <li className='card__description_item'>imdbID: {}</li>
        <li className='card__description_item'>Type: {}</li>
      </ul>
    </div>
  );
};
