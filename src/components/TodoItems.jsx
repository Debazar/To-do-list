import React from "react";


function TodoItems(props){
  
  return <li onClick = {()=>{
    props.onCheck(props.id)
  }} id = {props.key}>{props.text}</li>
}

export default TodoItems;