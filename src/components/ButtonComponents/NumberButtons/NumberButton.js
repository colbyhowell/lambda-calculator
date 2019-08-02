import React from "react";


const NumberButton = (props) => {

 return (
 
 <button className={props.numbers === "0" ? "zeroButton": "numberButton"} onClick={() => props.numberAll(props.numbers)}>
    {props.numbers}
  </button>
 )};

export default NumberButton