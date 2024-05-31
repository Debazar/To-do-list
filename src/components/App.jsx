import React, { useState } from "react";
import TodoItems from "./TodoItems";
import InputArea from "./InputArea";



function App() {
  
  const [items, setItems] = useState([]);


   

  function DeleteItem(id){
    setItems((prevValue)=>{
       return prevValue.filter(
        (item, index)=>{
          return id !== index
        }
       )
    })
  }

  function handleChange(inputText){
    setItems((prevValue)=>{
      return[...prevValue, inputText];
    })

    
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
       onChange = {handleChange}
      />
      <div>
        <ul>
         {items.map((item, index) =>(
          <TodoItems
             id = {index}
             key = {index}
             text = {item}
             onCheck = {DeleteItem}
          />
         ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
