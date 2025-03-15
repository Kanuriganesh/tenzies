import React from 'react'
import "./App.css"
import Die from './components/Die';
import { v4 as uuidv4 } from "uuid";
const App = () => {
    React.useEffect(()=>{
        const allHeld = dice.every((die)=> die.isheld) 
        const firstValue = dice[0]?.value; 
        const allSameValue = dice.every(die => die.value === firstValue)
        if(allHeld && allSameValue){
              setTenzies(true);
        }
   },[dice])
    const createAllDice=()=>{
        return Array.from({length:10},()=>({
             value : Math.ceil(Math.random() * 6), 
             isheld:false, 
             id : uuidv4()
        }))
    }  
    const [dice,setDice] = React.useState(createAllDice())    
    const [tenzies,setTenzies]  = React.useState(false);

    const updateTheisHeld=(id)=>{
         setDice(prevState=>
            prevState.map(
                die=> 
                die.id === id ? {...die,isheld:!die.isheld} : die
            )
         )
    }  
    const updateTheDice=()=>{
        if(tenzies){
            
             setTenzies(false) 
             setDice(createAllDice()); 
        } 
        else{
            setDice(prevState=>
                prevState.map(dice=>
                   
                      dice.isheld ? dice : {...dice , value:Math.ceil(Math.random() * 6 )}
                    
                )
            ) 
        }
    }
   
    return (
        <main className="game-container">
          <h1>Tenzies</h1>
          <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
          <div className="dice-container">
                {
                      dice.map(eachDice=><Die eachDice={eachDice} updateTheisHeld={updateTheisHeld} key={eachDice.id}/>)
                }
                
          </div>
          <button className="roll-button" onClick={updateTheDice} >{tenzies ? "New Game": "Roll"}</button>
        </main>
    );
}
export default App