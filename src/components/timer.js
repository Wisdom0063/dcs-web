import React from "react"
export default function Timer({minute, seconds}){
    let minuteText = minute<10?`0${minute}`:minute
    let secondsText = seconds<10?`0${seconds}`:seconds
   let time=`${minuteText}:${secondsText}`
    return (
    <span style={{font:" 550 180px Helvetica, Arial, sans-serif", color:"#262626"}}>{time}</span>

    )
}