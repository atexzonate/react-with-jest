import React,{useState} from 'react'
import "./Counter.css";

const Counter = () => {
     const [counter, setCounter] = useState(0)
     const [input, setInput] = useState(1)

     const addCounter = () => {
          setCounter(counter + input)
     }
     const subCounter = () => {
          setCounter(counter - input)
     }
     return (
          <div>
              <h3 data-testid='header'>My Counter</h3>
              <h2 
               data-testid='counterNum' 
               className={`${counter >= 100 ? 'green' : ''}${counter <= -100 ? 'red' : ''}`}
               >{counter}</h2>
              <button 
                    data-testid='subBtn' 
                    onClick={subCounter}
                    
               >
                   -
               </button>
              <input 
                    className='text-center' 
                    data-testid='input' 
                    type='number' 
                    onChange={(e)=>setInput(parseInt(e.target.value))}
                    value={input}
               />
              <button 
                    data-testid='addBtn' 
                    onClick={addCounter}
               >+
               </button>
          </div>
     )
}

export default Counter
