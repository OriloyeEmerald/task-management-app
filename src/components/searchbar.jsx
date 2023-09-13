import React from 'react';
import '../styles/searchbar.css'

 const Searchbar = ({taskName, handleInput, addTask, dueDate, handleDueDate}) => {
  return (
    <div>
     <div>
      <input type="text" placeholder='enter task...' value={taskName} onChange={handleInput} className='task-input'/>
       <br /> <br />
      <input type="date" value={dueDate} onChange={handleDueDate} className='date-input'/>
     </div>
     <br />
      <button onClick={addTask}>Add task</button>
    </div>
  );
}

export default Searchbar;
