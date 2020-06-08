import React from "react";
export default function TimerAlert({ isMoreHalf, isTimeUp, is10below }) {
  let textToShow = isTimeUp ? (
    <span style={{ font: "italic  28px Georgia, serif" }}>Time up</span>
  ) : is10below ? (
    <span style={{ font: "italic  28px Georgia, serif" }} className="blinking">
      More than halfway there!
    </span>
  ) : isMoreHalf ? (
    <span style={{ font: "italic  28px Georgia, serif" }}>
      More than halfway there!
    </span>
  ) : null;
  return <span>{textToShow}</span>;
}
