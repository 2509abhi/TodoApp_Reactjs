import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.func} type="text" value={props.value} />
      <button onClick={props.func2}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
