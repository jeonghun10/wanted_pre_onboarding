import React, { useState } from "react";


const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleHandler = () => {
      setIsOn(!isOn)
  }
  return (
    <div >
      <h1>Toggle</h1>
      <div  className={`toggleConatainer ${isOn ? 'toggle-checked' : ''}`}>
        <div onClick={toggleHandler} className={`toggleCircle ${isOn ? 'toggle-checked' : ''}`}></div>
      </div>
      
    </div>
  );
};

export default Toggle;


