import React from "react";
import userLogo from "../../assets/User.svg";
import "./User.css";

export const User = () => {
  return (
    <div className='user__container'>
      <img src={userLogo} alt='user logo' />
      <p className='user__text'>Your Name</p>
    </div>
  );
};
