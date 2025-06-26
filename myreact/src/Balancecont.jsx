import React,{useState} from 'react'
import './Style.css'
import Expenseitem from './Expenseitem'
import History from './history' 

function Balancecont(props) {

  const expenses = props.expense || [];

  let income = 0;
  let expense = 0;

  expenses.forEach(({ amount }) => {
    if (amount > 0) {
      income += amount;
    } else {
      expense -= amount;
    }
  });

  const balance = income + expense;


  return (
    <div className='displaybox' >
        
            <div className='balance-item'>
                <h4 className='balance-item-title'>INCOME</h4>
                <h1 className='balance-item-amount-income'>
                    ${`${income}`}


                </h1>
            </div>
            <div className='balance-item'>
                <h4 className='balance-item-title'>EXPENSE</h4>
                <h1 className='balance-item-amount-expense'>
                    ${`${expense}`}


                </h1>
            </div>
            <div className='balance-item'>
                <h4 className='balance-item-title'>BALANCE</h4>
                <h1 className='balance-item-amount-balance'>
                    ${`${income-expense}`}


                </h1>
            </div>
            
        </div>
  )
}

export default Balancecont