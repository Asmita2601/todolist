import React from "react";
import { FcDisapprove } from "react-icons/fc";
const ToDo=(props)=>{
   
    return(
        <>
        <div className="todo">
       <FcDisapprove className= "wroung-btn" onClick={()=>{
        props.onSelect(props.id);
       }}
       />
       <li>{props.text}</li>
       </div>
    </>
    )
}
export default ToDo;