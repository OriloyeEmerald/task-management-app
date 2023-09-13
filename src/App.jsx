
import { useState } from 'react'
import './App.css'
import Searchbar from './components/searchbar'
import Tasks from './components/tasks'

function App() {
  
  const [emptyState, setEmptyState] = useState(true)
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('')
  const [dueDate, setDueDate] = useState('')

  

  const addTask = () => {
     const newTask = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length -1].id + 1,
      task: taskName,
      date: dueDate
    }

     setTasks([...tasks, newTask])
     setTaskName('');
     setDueDate('');
     setEmptyState(false);
  }

  const deleteTask = (id) => {
    const taskList = tasks.filter((task) => task.id !== id);
    setTasks(taskList);

    if(taskList.length === 0) {
      setEmptyState(true);
    }
   
  }

  const handleInput = (event) => {
    setTaskName(event.target.value)
    
  }
  const handleDueDate = (event) => {
    setDueDate(event.target.value)
    
  }
  return (
    <>
     <Searchbar 
     taskName={taskName} 
     handleInput={handleInput}
     addTask={addTask} 
     dueDate={dueDate}
     handleDueDate={handleDueDate}
     />
     <Tasks 
     emptyState={emptyState} 
     tasks={tasks}
     deleteTask={deleteTask}
     />
      
    </>
  )
}

export default App
