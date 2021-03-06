import React, { useState } from "react";


const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const menuArr = [
      {name:'tab1', content:'Tab menu One'},
      {name:'tab2', content:'Tab menu Two'},
      {name:'tab3', content:'Tab menu Three'},
  ]

  const tabHandler = (index) => {
    setCurrentTab(index)
  }
  return (
    <div className="wrap tabWrap">
      <h1>Tab</h1>
        <ul className="tabMenu">
        {
            menuArr.map((el, index)=>{
                return (
                    <li onClick={()=>tabHandler(index)} key={index} className={currentTab===index ? 'submenu focused':'submenu'}>
                        {el.name}                        
                    </li>
                )
            })
        }
        </ul>
        <div>{menuArr[currentTab].content}</div>
    </div>
  );
};

export default Tab;


