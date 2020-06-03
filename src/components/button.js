import React from "react"
export default function Button({style, text, onClick}){
return ( <button style={style} onClick={onClick}> {text}</button>
    )

}