import React, {useState,useEffect} from 'react';
import './Style.css';
function Submit(e){
    e.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    Msg.innerHTML="Your name is "+name;
    Meg.innerHTML="Your email is "+email;
}
function Form(){
   return  (       
    <form>
        <div>
        <label >Enter name:</label><br></br>
        <input type="text" id="name" placeholder="yourname..." onChange={Submit}></input>
        </div><br></br>
        <div>
        <label >Enter email</label><br  ></br>
        <input type="mail" id="email" placeholder="your-email"onChange={Submit}></input>
        </div><br></br>
        <button className="btn"onClick={Submit} >  Submit </button>
        <h1  id="Msg"></h1>
        <h1 id="Meg"></h1>
    </form>

)
}

export default Form;