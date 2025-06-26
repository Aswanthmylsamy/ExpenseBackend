import React, { useState } from 'react';
import './Style.css';

function Newc() {
  const [name, setName] = useState('');
  const [nameList, setNameList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setNameList((prevList) => [...prevList, name]);
      setName('');
    }
  };

  return (
    <div className='of'>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br /><br />
        <input
          type='text'
          className='form-input1'
          id='name'
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br />

        <button type='submit' className='submit-button1'>Submit</button>

        <ul id='msg'>
          {nameList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Newc;
