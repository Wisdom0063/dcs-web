import React from "react"
import Button from "./button"
function SpeedControlButton({value}){
    let style = 1==value?{backgroundColor:"#6C6B6C", color:"#ffffff"}:{color:"#000000"}
    return (        <div>
        <Button style={{height:"60px", width:"95px",  fontSize:"18px", ...style}} text={value+"X"}/>
    </div>)

}

export default SpeedControlButton