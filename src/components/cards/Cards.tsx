import React from "react";
import { Card } from "../card/Card.tsx";
import "./Cards.css";

export const Cards = () => {
  return (
    <div className='cards__container'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
