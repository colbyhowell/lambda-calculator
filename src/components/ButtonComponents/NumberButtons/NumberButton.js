import React from "react";


const NumberButton = ({numbers}) => {
  return (
    <button className="mainButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */} {numbers}
    </button>
  );
};

export default NumberButton