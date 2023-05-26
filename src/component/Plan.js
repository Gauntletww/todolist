import React from "react";

export default function Plan({ list, setList }) {
const HandleRemove = (event)=>{
  
const index = parseInt(event.target.getAttribute("index"));
const updatedList = [...list];
updatedList.splice(index,1)
    setList(updatedList);
}
  return (
    <ul className="list-unstyled row m-2">
    {  list.map((item,index)=>{
      if(item!==""){
        return(
    <li className="shadow p-2 my-2 container-fluid d-flex justify-content-between align-items-center">
      <span>{item}</span> 
      <button className="btn btn-danger" index={index} onClick={HandleRemove}>X</button>
      </li>)
      }else{
        return null;
      }
    })}
      </ul>
 
  );
  
}
