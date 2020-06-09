import React from "react"
import Button from "./button"
function SpeedControlButton({value, currentSpeed, onChange, timerActive}){
    let style = currentSpeed==value?{backgroundColor:"#6C6B6C", color:"#ffffff"}:{color:"#000000"}
    return (        <div>
        <Button disabled={!timerActive}  style={{height:"60px", width:"95px", borderWidth:"1px", borderColor:"#000000", fontSize:"18px", ...style}} onClick={onChange} text={value+"X"}/>
    </div>)

}

export default SpeedControlButton