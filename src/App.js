import logo from './logo.svg';
import { useState } from 'react';

import './index.css'

function App() {
  const [calc, setCalc] = useState("");
  const  [result, setResult] = useState("")

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {

    if (
      ops.includes(value) && calc===''||
      ops.includes(value) && ops.includes(calc.slice(-1))
      
      
    ){return;}
    
    setCalc(calc + value)/*calc the current value in the display added to value
    which is inputted by user both are added and updated value is added to display*/ 
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString())

    }
  }

  const createDigits = () =>{
    const digits = [];

    for (let i = 1; i < 10; i++){
      digits.push(
        <button onClick={()=>updateCalc(i.toString())}
           >
          {i}
          </ button >
      )

    }
    return digits;
  }
  const calculate = () => {
    setCalc(eval(calc).toString());

  }
  const del = () =>{
    if (calc === ""){
      return;

    }
    const value = calc.slice(0, -1);/*value is a prop and is the inputted value  
            extract all elements from the beginning of the sequence (index 0) 
            up to, but not including, the last element (index -1)...
            value is a new variable that has the deleted calulator display
            and is updated to the calculator using setCalc*/
    setCalc(value)
  }
  const reset = () =>{
   if(calc===""){
    return;
   }

   const value = calc.slice(0,0);
   setCalc(value)
  }

  return (
    <div className="App">
      <div className='calculator'>
      <div className="display" >
        {result ? <span>({result})</span> : ''}
        &nbsp;
         {calc || "0"}
        </div>
        <div className='operators'>
          <button onClick={()=>updateCalc('/')}>/</button>
          <button onClick={()=>updateCalc('*')}>*</button>
          <button onClick={()=>updateCalc('+')}>+</button>
          <button onClick={()=>updateCalc('-')}>-</button>

          <button onClick={del}>DEL</button>
          <button onClick={reset}>reset</button>
</div>

        <div className='digits'>
          {createDigits()}
        <button onClick={()=>updateCalc('0')}>0</button>
        <button onClick={()=>updateCalc('.')}>.</button>
        
        <button onClick={calculate}>=</button>


</div>
      </div>

      
    </div>
  );
}

export default App;
