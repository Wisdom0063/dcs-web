import React from "react"
export default function Timer({minute, seconds, is20Below, is10below}){
    console.log(is20Below)
console.log(is10below)
    let minuteText = minute<10?`0${minute}`:minute
    let secondsText = seconds<10?`0${seconds}`:seconds
   let time=`${minuteText}:${secondsText}`
   let color = is20Below?"red":"#262626"
   let blinkingClass = is10below?"blinking":null
    return (
    <span className={blinkingClass} style={{font:" 550 180px Helvetica, Arial, sans-serif", color}}>{time}</span>

    )
}