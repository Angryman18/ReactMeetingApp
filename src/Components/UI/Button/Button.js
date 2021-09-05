import React from "react";
import style from './Button.module.css';


const Button = (props) => {
  return (
    <button
      className={
        props.buttonStyle === undefined ? style.button : props.buttonStyle
      }
      type="submit"
      {...props.buttonProps}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;
