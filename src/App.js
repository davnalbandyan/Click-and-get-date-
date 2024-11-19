import { useState } from "react";

export default function App() {
    const  [step,setStep] = useState(0);
    const [count,setCount] = useState(0);
    const date = new Date("june 21 2027");
    date.setDate(count);
    
    function stepPlus(){
        setStep((s)=> s + 1)
    };
    function stepMinus(){
        setStep((s)=> s - 1)
    };
    
  return (
    
    <div className="container">
      <div>
        <button onClick={stepMinus}>-</button>
        <span>Step:{step}</span>
        <button onClick={stepPlus}>+</button>
      </div>
     <div>
      <button onClick={()=>{setCount(count - step)}}>-</button>
      <span>Count:{count}</span>
      <button onClick={()=>{setCount(count + step)}}>+</button>
     </div>
     <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
     <span>{date.toDateString()}</span>
    </div>
  );
}
