import React from "react";

const OperatorButton = ({operators}) => {
  return (


    <button className="operatorButton">
      {/* Display a button element rendering the data being passed down from the parent container on props */}{operators.char}
    </button>
  );
};

export default OperatorButton