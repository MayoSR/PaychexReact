import React from "react";

export default function RadioButtons(props) {
  return (
    <div style={{ display: "flex", alignItems: "center" }} onClick={() => props.setSelectedOption(props.data.id)}>
      <div style={{width:"25px",height:"25px",borderRadius:"50%",border:"1px solid black",background: props.data.id === props.selectedOption ? "blue" : "transparent"}}></div>
      <p>{props.data.value}</p>
    </div>
  );
}
