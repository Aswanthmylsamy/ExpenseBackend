import React from 'react';
import {useState} from 'react';
import "./Style.css"
function Print(Props){
    const[ data, setData]=useState("hello");
    const[count,setCount]=useState(0);
    function handleClick(){
        setData("Hello 👹👹👹👹👹👹👹👹👹👹👹👹👹 World");
    }
    function handleClear(){
        setData("");
    }
    function ICount(){
        setCount(count+1);
    }
    function DCount(){
        setCount(count-1);
    }
    function Reset(){
        setCount("+"+1/0);
    }
    return (
    <>
    
        <div className="buton">
        <h1>{data}</h1>
        </div>
        <div className="buton">
        <button onClick={handleClick} className="btn">Click Me</button>
        <button onClick={handleClear} className="btn">Clear</button>
        </div>
         <h1>{count}</h1>
        <div className="buton">
       
        
        <button onClick={ICount} className="btn">+</button> 
        <button onClick={DCount} className="btn">-</button><br></br>
       </div>
       <div className="buton">
        <button onClick={Reset} className="btn">Reset</button>
        </div>
        
        
    </>
    );
}
export default Print;