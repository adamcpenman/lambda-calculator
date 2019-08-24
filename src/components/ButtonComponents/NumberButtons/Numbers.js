import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

//import any components needed


//Import your array data to from the provided data file


 const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [buttonNumbers, setButtonNumber] = useState(numbers);
  console.log("numbers", props);
  return (
    <div>
      {buttonNumbers.map(number => {
                     return <NumberButton key={number} 
                                          text={number} 
                                          addNumber={props.addNumber}/>;
  })}
 </div>
  );
 }

export default Numbers


