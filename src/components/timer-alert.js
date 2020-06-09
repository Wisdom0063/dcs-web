import React from "react";
export default function TimerAlert({ isMoreHalf, isTimeUp }) {
  let textToShow = isTimeUp ? (
    <span style={{ font: "italic  28px Georgia, serif" }}>Time's up!</span>
  ) : isMoreHalf ? (
    <span style={{ font: "italic  28px Georgia, serif" }}>
      More than halfway there!
    </span>
  ) : null;
  return <span>{textToShow}</span>;
}
