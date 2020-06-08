import React from "react"
export default function Button({style, text, disabled, onClick}){
return ( <button disabled={disabled} style={style} onClick={onClick}>{text}</button>)}