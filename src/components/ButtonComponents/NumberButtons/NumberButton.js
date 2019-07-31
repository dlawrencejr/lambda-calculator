import React from "react";

const NumberButton = (props) => {
return (
<>
{/* Display a button element rendering the data being passed down from the parent container on props */}

{props.number === '0' ? (
<button onClick={props.clickNumBtn} name='zero'data-type='number' >{props.number}</button>
)
:(
  <button onClick={props.clickNumBtn}data-type='number'>{props.number}</button>
)}
</>
);
};
export default NumberButton;