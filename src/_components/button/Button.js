import React from "react";

import './Button.css'

import colors from "./colorOrder";

const Button = ({
  children,
  colorId,
  onClick,
  small = false,
  selected = false,
  icon = null,
  otherStyles = {}
}) => {
  const borderColor = colors[colorId]
  return (
    <span
      className={`Button ${small ? 'small' : 'regular'}${selected ? ' selected' : ''}`}
      onClick={onClick}
      style={{borderColor, ...otherStyles}}
    >
      {icon ? <img src={icon} alt='' /> : null}
      {children}
    </span>
  );
};

export default Button;