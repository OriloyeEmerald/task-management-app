import React from 'react';
import '../styles/task.css'

const Task = ({taskName, dueDate, deleteTask, id}) => {
  return (
    <div className='task'>
         <div>
          <p className='task-name'>{taskName}</p>
          <span className='duedate'>{dueDate}</span>
         </div>
         <div>
         <button onClick={() => deleteTask(id)} className='del-btn'>Delete task</button>
         </div>
      </div>
  );
}

export default Task;
