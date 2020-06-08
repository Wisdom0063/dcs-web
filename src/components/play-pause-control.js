import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons'
export default function PlayPauseControl({onClick, isPlaying}){
    let icon = isPlaying?faPauseCircle:faPlayCircle

    return (
        <div>
        <FontAwesomeIcon icon={icon} size="4x" onClick={()=>onClick()} />           

        </div>

    )
}