import React from "react";
import style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className={
        props.inputStyle === undefined ? style.input : props.inputStyle
      }
      {...props.inputClass}
    />
  );
});

export default React.memo(Input);
