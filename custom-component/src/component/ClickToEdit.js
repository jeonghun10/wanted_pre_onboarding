import React, { useState, useRef, useEffect } from "react";


const ClickToEdit = () => {
  const [name, setName] = useState('김코딩')
  const [age, setAge] = useState(20)
  

  return (
    <div className="wrap">
      <h1>ClickToEdit</h1>
      <div className="clickWrap">
        <span className="click title">이름</span>
        <MyInput value={name} handleValue={setName}></MyInput>
      </div>
      <div className="clickWrap">
        <span className="click title">나이</span>
        <MyInput value={age} handleValue={setAge}></MyInput>
      </div>  
      <div>
        <p>이름 : {name} 나이 : {age}</p>
      </div>
      
    </div>
  );
};

const MyInput = ({value, handleValue}) => {
    const [isOn, setIsOn] = useState(false)
    const [newValue, setNewValue] = useState(value)
    const inputEl = useRef(null)

    const handleClick = () => {
        setIsOn(!isOn)
    }
    const handleBlur = () => {
        setIsOn(!isOn)
        handleValue(newValue)
    }
    const handleInputChange = (e) => {
        setNewValue(e.target.value)
    }
    useEffect(()=>{
        if(isOn){
          inputEl.current.focus();
        }
    }, [isOn])

    return (
        <>
            {
                isOn ? <input className="click input" type="text" ref={inputEl} value={newValue} onChange={handleInputChange} onBlur={handleBlur}></input>:<span onClick={handleClick}>{value}</span>
            }
        </>
    )
}

export default ClickToEdit;



  
 