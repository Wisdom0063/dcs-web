import React from "react"
export default function TextInput({onChange, value}){
    return (
        <div>
            <input className="form__input" onChange={(e)=>{
                e.preventDefault()
                onChange(e.target.value)
                }} style={{width:"120px", height:"40px"}} value={value} placeholder="(Min)"/>
        </div>)
}