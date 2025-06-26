import React, { useState } from 'react'
import History from './history';

function ExpenseForm(props) {
  const [amount,setAmount] = useState();
  const [title,setTitle] = useState('');


  const [expenses, setExpenses] = useState([]);

   const handleSubmit = async(e)=> {
    e.preventDefault();
    if (title === '') {
      alert('Please enter valid title and amount');
      return;
    }
    const expense = {
      title: title,
      amount: parseFloat(amount)
    };

    props.func(expense.title, expense.amount);
    setExpenses([...expenses, expense]);
    await axios.post('http://localhost:2000/expenses', { title, amount });
    
    
  }
  return (
    <>
    <div className='expense-form'>
      <h1>Add Expense</h1>
      <form onSubmit={(e) => {handleSubmit(e) }}>
        <label className='form-label'>
          Title:
          <input className='form-input' 
          type="text" onChange={(e)=>setTitle(e.target.value)} value={title} name="title" />
        </label>
        <br />
        <label className='form-label'>
          Amount:
          <input className='form-input'   onChange={(e)=>setAmount(e.target.value)}  value={amount} type="number" name="amount"  />
        </label>
        <br />
        <button className='submit-button' type="submit" >Add Expense</button>
      </form>
      
      </div>
    </>
  )
}

export default ExpenseForm;