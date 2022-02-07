import React, { useState } from "react";


const Modal = () => {
  const [isOn, setIsOn] = useState(false)

  const ModalHandler = () => {
      setIsOn(!isOn)
  }
  return (
    <div>
      <h1>Modal</h1>
      <div onClick={ModalHandler} className={`modalBtn ${isOn ? 'modal-checked' : ''}`}>
        <h4>Open Modal</h4>
      </div>
      {isOn ? 
        <div  className="modalBack">
            <div className={`modalView ${isOn ? 'modalOpen' : 'modalClose'}`}>
                <h3 onClick={ModalHandler} >x </h3>
                <h5>Hello</h5>
            </div>
        </div>:null}
     
    </div>
  );
};

export default Modal;


