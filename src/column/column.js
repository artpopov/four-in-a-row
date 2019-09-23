import React from "react";
import Cell from "../cell/cell";
import "./column.css";

function Column(props) {
  return (
    <div className="column" onClick={() => props.onColumnPress(props.columnID)}>
      {props.data.map((el, ind) => (
        <Cell key={ind} value={props.data[ind]} />
      ))}
    </div>
  );
}

export default Column;
