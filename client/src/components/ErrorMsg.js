import React from "react";

export const ErrorMsg = (props) =>{
  return (
      <div className="errormsg">
        <span>{props.error}</span>
        <span className="close" onClick={props.clearError}>X</span>
      </div>
  );
}