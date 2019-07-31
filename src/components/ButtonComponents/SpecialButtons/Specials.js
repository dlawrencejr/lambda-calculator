import React, {useState} from "react";

//import any components needed
import SpecialButton from './SpecialButton';
//Import your array data to from the provided data file
import {specials} from '../../../data';
const Specials = ({updateValue, resetValue}) => {
  // STEP 2 - add the imported data to state
const [specialState] = useState(specials);
const clickBtn = btn =>{
  if (btn === 'C'){
   resetValue();
  }
  else {
    updateValue(btn);
    }
}
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map(special => <SpecialButton key={special} special={special} 
       updateValue={() => clickBtn(special) } />)}
    </div>
  );
};
export default Specials;