import React from "react";
import "./MoveBox.css";

// *** add loading message while still loading moves

export default function MoveBox(props) {
  return (
    <div className="MoveContainer">
      {!props.stab ? (
        <div className="STABBoxEmpty"></div>
      ) : (
        <div
          className="STABBox"
          style={{
            backgroundColor: props.typeColor,
            color: props.typeColor == "black" ? "white" : "black",
          }}
        >
          STAB
        </div>
      )}
      <div className="delete-container">
        <div
          className="MoveBox"
          style={{
            backgroundColor: props.typeColor,
            color: props.typeColor == "black" ? "white" : "black",
          }}
        >
          {props.name}
        </div>
        <button className="btn btn-danger delete-button" onClick={(e) => props.deleteMove(props.moveSlot)}>X</button>
      </div>
    </div>
  );
}
