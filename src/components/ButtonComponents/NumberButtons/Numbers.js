import React from "react";

import NumberButton from './NumberButton'


//import any components needed

//Import your array data to from the provided data file

const Numbers = props => {
  // STEP 2 - add the imported data to state

  console.log(props)
  return (
    <div className='numberContainer'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {props.numbers.map(number => {
         return <NumberButton 
         numbers={number} 
         setDisplayNumber={props.setDisplayNumber}
         displayNumber={props.displayNumber}
         numberAll={props.numberAll}
         key={number} />
        })
      }
    </div>
  );
};

export default Numbers