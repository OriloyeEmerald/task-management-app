import React from 'react';
import '../styles/searchbar.css'

 const Searchbar = ({taskName, handleInput, addTask, dueDate, handleDueDate}) => {
  return (
    <div>
     <div>
      <input type="text" placeholder='enter task...' value={taskName} onChange={handleInput} className='task-input'/>
       <br /> <br />
     <div className='date-input'>
      <label htmlFor="duedate">select date:</label>
      <input type="date" value={dueDate} onChange={handleDueDate} />
     </div>
     </div>
     <br />
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default Searchbar;
