import React from "react";
import Column from "../column/column";
import "./table.css";

function Table(props) {
  return (
    <div className="gameTable">
      {props.field.map((el, ind) => (
        <Column
          key={ind}
          columnID={ind}
          onColumnPress={props.onColumnPress}
          data={props.field[ind]}
        />
      ))}
    </div>
  );
}

export default Table;
