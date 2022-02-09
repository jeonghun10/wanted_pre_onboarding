import React, { useState } from "react";


const Toggle = () => {
  const [isOn, setIsOn] = useState(false)

  const toggleHandler = () => {
      setIsOn(!isOn)
  }
  return (
    <div className="wrap">
      <h1>Toggle</h1>
      <div  className={`toggleConatainer ${isOn ? 'toggle-checked' : ''}`}>
        <div onClick={toggleHandler} className={`toggleCircle ${isOn ? 'toggle-checked' : ''}`}></div>
      </div>
      <h4>{isOn ? 'Toggle Switch ON':'Toggle Swtich OFF'}</h4>
      
    </div>
  );
};

export default Toggle;


