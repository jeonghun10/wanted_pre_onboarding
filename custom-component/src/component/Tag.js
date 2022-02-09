import React, { useState } from "react";


const Tag = () => {
  const [currentTab, setCurrentTab] = useState([])

  const tagHandler = (e) => {
    setCurrentTab([...currentTab, e.target.value])
    console.log(currentTab)
  }
  const removeTags = (index) => {
    setCurrentTab(currentTab.filter((el, num)=> num !==index))
  }

  const onKeyPress = (e) => {
    if(e.key==='Enter'){
        tagHandler(e)
        e.target.value = ''
    }
  }
  return (
    <div className="wrap tabWrap">
      <h1>Tag</h1>
        <div>
            <input className="tagInput" onKeyPress={(e)=>{onKeyPress(e)}} type="text" placeholder="Press enter to add tags"></input>
            <ul className="tagMenu">
            {
                currentTab.map((el, index)=>{
                    return (
                        <li key={index} className="tags">
                            <span className="title">{el}</span>
                            <span className="btn" onClick={()=>{removeTags(index)}}>X</span>                 
                        </li>
                    )
                })
            }
            </ul>
        </div>
        
    </div>
  );
};

export default Tag;


