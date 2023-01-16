import React, { useState } from "react";
import ToDo from "./ToDo";
import "./todo.css";


const ToDolist =()=>{
    const [inputlist,setInputList]=useState("");
const[items,setItems]=useState([]);
    const itemEvent=(event)=>{
setInputList(event.target.value);
    };
 const listofitems=()=>{
setItems((oldItems)=>{
    return[...oldItems,inputlist];
});
setInputList("");
 }
 const deletItems=(id)=>{
    console.log("deleted"); 
    setItems((oldItems)=>{
        return oldItems.filter((arrElem,index)=>{
        return index!==id;
        });
    });
}
    return(
        <>
        <div className="container">
        <div className="main_div">
        <br/>
        <h1 className="heading">ToDo Lists</h1>
        <input type="text" placeholder="Add  a items" onChange={itemEvent} value={inputlist}/>
        <button onClick={listofitems}>+</button>
        <ol>
        {/* <li>{inputlist}</li> */}
        { items.map((itemval,index)=>{
         return <ToDo key={index} id={index} text={itemval} onSelect={deletItems}/>;
       })}
       </ol>
      </div>
      </div>
      </>
    )
    };
export default ToDolist;