import React,{useState} from 'react'
import './Style.css'
function Expenseitem(props) {
const {title,amount, _id}=props.expense
const type= amount > 0 ? "income" : "expense"
const [showToast, setShowToast] = useState(false);

  const handleDelete = () => {
  const confirmed = window.confirm("Are you sure you want to delete this?");
  if (confirmed) {
    setShowToast(true);
  
    setTimeout(() => {
      
      setShowToast(false);
      props.deleteExpense(_id);
    }, 1500); 
  }
};


if (amount<=0){     
  return (
    
   
    <div>
     
      <div className={`expense-item ${type}`}></div>
      
        
            <div className="cont">
                
                    <div className='expense-title'>{title}</div>
                
                
                    <div className="col">
                        <div className='expense-amount'>${amount}</div>
                        
                               
<div className='delete-button-overlay'>
              <button onClick={handleDelete}><svg width="24" height="24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg></button>
  {showToast && <div className="toast">Deleted</div>}
            </div>
            </div>
    
    </div>
    
    </div>
  )
}
else {
    return (
    
   
    <div>
     
      <div className={`expense-item ${type}`}></div>
      
        
            <div className="cont1">
                
                    <div className='expense-title'>{title}</div>
                
                
                    <div className="col1">
                        <div className='expense-amount'>${amount}</div>
                        
                               
<div className='delete-button-overlay'>
              <button onClick={handleDelete}><svg width="24" height="24" fill="currentColor">
    <path d="M6 19c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
  </svg></button>
 {showToast && <div className="toast1">Deleted</div>}
            </div>
            </div>
    
    </div>
    
    </div>
  )
}
}

export default Expenseitem