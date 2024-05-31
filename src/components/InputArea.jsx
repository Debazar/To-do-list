import React, {useState} from "react";

function InputArea(props){


  const [inputText, setInputText] = useState("");

  function handleTextAdd(event){
    const InputTextAdd = event.target.value;
     setInputText(InputTextAdd)
    
  }

  return(
    <div className="form">
    <input onChange={handleTextAdd} type="text" value = {inputText} />
    <button onClick={()=>{
      props.onChange(inputText);
      setInputText("")
    }}>
      <span>Add</span>
    </button>
  </div>
  )
}


export default InputArea;

