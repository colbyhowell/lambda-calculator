import React from "react";


const NumberButton = ({numbers}) => {
  if(numbers === "0"){
    return <button className="zeroButton">
    {numbers}
  </button>
  }else return (
    <button className="numberButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */} {numbers}
    </button>
  );
};

export default NumberButton