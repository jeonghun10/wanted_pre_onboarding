import React, { useState } from "react";


const Modal = () => {
  const [isOn, setIsOn] = useState(false)

  const modalHandler = () => {
      setIsOn(!isOn)
  }
  return (
    <div className="wrab">
      <h1>Modal</h1>
      <div onClick={modalHandler} className={`modalBtn ${isOn ? 'modal-checked' : ''}`}>
        <h4>Open Modal</h4>
      </div>
      {isOn ? 
        <div  className="modalBack">
            <div className={`modalView ${isOn ? 'modalOpen' : 'modalClose'}`}>
                <h3 onClick={modalHandler} >x </h3>
                <h5>Hello</h5>
            </div>
        </div>:null}
     
    </div>
  );
};

export default Modal;


