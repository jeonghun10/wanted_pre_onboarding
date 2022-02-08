import React, { useState } from "react";

const deselectedOptions = [
    'rustic',
    'antique',
    'vinyl',
    'vintage',
    'refurbished',
    '신품',
    '빈티지',
    '중고A급',
    '중고B급',
    '골동품'
  ];


const AutoComplete = () => {
  const [inputText, setInputText] = useState('');
  const [matchInfo, setMatchInfo] = useState([]);
  const [ulView, setUlView] = useState(false);


  
  

  const autoCompleteHandler = (e) => {
    setInputText(e.target.value)  
    if(e.target.value===''){
        setMatchInfo([])
        setUlView(false)
    }
    let result = deselectedOptions.filter((el)=>el.toLowerCase().includes(e.target.value))
    if(result.length!==deselectedOptions.length){
        setMatchInfo(result)
        setUlView(true)
    }

  }
  const clickHandler = (el)=>{
    setInputText(el)
  }
  
  
  return (
    <div className="wrab">
      <h1>AutoComplete</h1>
        <div>
            <input className="autoCompleteInput" onChange={(e)=>{autoCompleteHandler(e)}} type="text" value={inputText} ></input>
            {matchInfo.length===0 ? null:
            <ul className={ulView ? "autoList ulView" : "autoList" }>
                {
                    matchInfo.map((el)=>{
                        return <li className="listItem" onClick={()=>{clickHandler(el)}}>{el}</li>
                    })
                }
            </ul>
            }
        </div>
        
    </div>
  );
};

export default AutoComplete;


