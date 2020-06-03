import React, {useState} from "react"
import {SpeedControlButton, TextInput, TimerAlert, Button, Timer, PlayPauseControl} from "./components"


function Home(){
    const [time, setTime] = useState(null)
    const controlvalues = [1,1.5,2]
    return <div className="container">
<div className="subContainer" >
    <div className="subContainerInner">
        {/* First Row Start here*/}
    <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-between align-items-center" style={{width:"88%"}}>
        <div>
            <span style={{font:"25px Georgia, serif"}}>CountDown:</span>
        </div>

        <div>
            <TextInput/>
        </div>

        <div>
            <Button style={{height:"50px", width:"100px", backgroundColor:"#09bba1", fontSize:"18px", color:"#ffffff"}} text="Start" onClick={()=>""}/>
        </div>

        </div>
        </div>
        {/* First Row ends here*/}

        {/* Second Row start here*/}
        <div className="d-flex justify-content-center" style={{width:"100%", marginTop:"40px"}}>
            <TimerAlert text={"More than halfway there!"} />
        </div>
        {/* Second Row ends here*/}



         {/* Third Row start here*/}

        <div className="d-flex justify-content-center align-items-center">
            <div style={{marginRight:"15px"}}>
                <Timer time={"15:31"}/>
            </div>
            <div style={{marginTop:"25px"}}>
<PlayPauseControl />        
             </div>

        </div>
         {/* Third Row ends here*/}


        {/* Fourth Row start here*/}
        <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
        <div className="d-flex justify-content-between" style={{width:"66%"}}>
            {controlvalues.map(value=><SpeedControlButton key={value} value={value} />)}
        </div>
        </div>

        {/* Fourth Row ends here*/}



    </div>
    </div>
  </div>
}

export default Home