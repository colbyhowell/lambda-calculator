import React from "react";


const SpecialButton = ({specials}) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}{specials}
    </button>
  );
};

export default SpecialButton