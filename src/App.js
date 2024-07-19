import React ,{useState}from "react";
import './App.css';

const App = ()=> {
  const [input,setInput]=useState("");
  const [result,setResult]=useState(0);
  const handler=e=>{
    setInput(e.target.value)};
  return (
   <div>
    <center>
      <input className="in" type="text" value={input} name="input" onChange ={handler}/>
      <br/>
      <button  className="res"onClick={() =>setResult(eval(input))}>Result</button>
      <h4>Result is: {result}</h4>
      
      <button className="btnn" onClick={()=> setInput(input+"1")}>1</button>
      <button className="btnn" onClick={()=> setInput(input+"2")}>2</button>
      <button className="btnn" onClick={()=> setInput(input+"3")}>3</button>
      <button className="btnn" onClick={()=> setInput(input+"4")}>4</button>
      <button  className="btnn" onClick={()=> setInput(input+"5")}>5</button><br/>
      <button className="btnn" onClick={()=> setInput(input+"6")}>6</button>
      <button className="btnn" onClick={()=> setInput(input+"7")}>7</button>
      <button className="btnn" onClick={()=> setInput(input+"8")}>8</button>
      <button className="btnn" onClick={()=> setInput(input+"9")}>9</button>
      <button className="btnn" onClick={()=> setInput(input+"0")}>0</button><br/>
      <button className="btnn" onClick={()=> setInput(input+"+")}>+</button>
      <button className="btnn" onClick={()=> setInput(input+"-")}>-</button>
      <button className="btnn" onClick={()=> setInput(input+"*")}>*</button>
      <button className="btnn" onClick={()=> setInput(input+"/")}>/</button>
      <button className="btnn" onClick={()=> setInput("")}>clr</button>
      

    </center>
   </div>
  );
}

export default App;