import React from 'react'
import ExpenseForm from './ExpenseForm'
import History from './history.jsx'
import './style.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {v4 as uid} from "uuid";
import Balancecont from'./Balancecont.jsx'


function ExpenseContainer() {
  const EXPENSE=[
    // {
    //   id:uid(),title:"Expense",amount:100,
    // },{
    //    id:uid(),title:"Expense 2",amount:-200,
    //   }
    ]
  const [expenses, setExpenses] = useState(EXPENSE)
  useEffect(() => {
    axios.get('http://localhost:2000/expenses')
      .then(res => setExpenses(res.data))
      .catch(err => console.log(err));
  }, []);
  console.log(expenses);


  async function addExpense(title, amount) {
  try {
    const newExpense = {
      title: title,
      amount: parseFloat(amount)
    };
    await axios.post('http://localhost:2000/expenses', newExpense);
    
    const res = await axios.get('http://localhost:2000/expenses');
    setExpenses(res.data);
  } catch (err) {
    console.error('Error adding:', err);
  }
}

async function deleteExpense(id) {
  try {
    await axios.delete(`http://localhost:2000/expenses/${id}`);
    
    const res = await axios.get('http://localhost:2000/expenses');
    setExpenses(res.data);
  } catch (err) {
    console.error('Error deleting:', err);
  }
}




if(expenses==""){
return (
    <div className='expense-container'>
      <h1 className='app-title'>Expense Tracker</h1>
      <Balancecont expense={expenses} />
       <h1>History</h1>
       <h3 className='hmsg'>History has been cleared</h3>
      
      <History expense={expenses} deleteExpense={deleteExpense} /><br></br>
      <ExpenseForm func={addExpense} />
      
      
    </div>
  )
} else {
  return (
    <div className='expense-container'>
      <h1 className='app-title'>Expense Tracker</h1>
      <Balancecont expense={expenses} />
       <h1>History</h1>
      <History expense={expenses} deleteExpense={deleteExpense} /><br></br>
      <ExpenseForm func={addExpense} />
      
      
    </div>
  )
}
}


export default ExpenseContainer