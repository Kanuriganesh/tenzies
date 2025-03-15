import React from 'react'
import "../App.css"
const Die = (props) => { 
    const {value,id,isheld} = props.eachDice
  return (
    <div onClick={()=>props.updateTheisHeld(id)}  className={`die ${isheld ? 'held': ""}`}>
         {value}
    </div>
  )
}

export default Die