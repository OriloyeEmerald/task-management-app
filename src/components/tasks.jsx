import React from 'react';
import Task from './task';

const Tasks = ({emptyState, tasks,deleteTask}) => {
  return (
    <div className='tasks'>
      <h1 className='header-title'>List Of Tasks:</h1>
      <hr />
 {emptyState
  ? 
 (<h1 className='h1'>No tasks yet! Add a task above.</h1> )
 :
  tasks.map((task, id) => {
      return <Task 
      taskName={task.task} 
      dueDate={task.date} 
      key={id} 
      deleteTask={deleteTask}
      id={task.id}
      />
  })
 }

    </div>
  );
}

export default Tasks;
