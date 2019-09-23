import React from "react";
import "./cell.css";

function Cell(props) {
  let cellColor;
  if (props.value === 1) cellColor = "red";
  if (props.value === 2) cellColor = "yellow";
  return <span className="cell" style={{ backgroundColor: cellColor }}></span>;
}

export default Cell;
