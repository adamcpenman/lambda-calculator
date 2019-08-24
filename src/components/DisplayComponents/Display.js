import React from "react";

const Display = (props) => {
  console.log("Display")
  return (
    <div className="display">
      {props.number}
    </div>
  );
};

export default Display;
