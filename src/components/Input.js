import React, { createContext, useState } from 'react'
import DisplayList from './DisplayList';


export const Context = createContext(null);

const Input = () => {

    const[task, setTask] = useState(' ')
    const[toDo, setToDO]  = useState([])


    const changeTask = (event) =>{
       setTask(event.target.value)
    }


    const submit = (event) =>{
      event.preventDefault();
      if(task === ' ')
      alert("Enter Any Task! Don't be blank ");
      else{
        const newTodos = [...toDo, task]
         setToDO(newTodos);
         setTask(' ') 
      }
    }


    const deleteTask = (indexValue) =>{
      const newTodo = toDo.filter((todo, index) => index !== indexValue)
      setToDO(newTodo);
    }


  return (
    <div className='main'>
      <h3 className = 'header'>TO-DO</h3>
       <div>
          <form onSubmit={submit}>
             <input type = 'text' className = 'Input-class' value = {task} onChange ={changeTask}/>
             &nbsp;&nbsp;
             <input type = 'submit' className = 'submit-class'value = 'Add to List'/>
          </form>
          {/* DisplayList todoList = {toDo} deleteTask = {deleteTask}/> */}
          <Context.Provider value =  { {toDo , deleteTask} } >
            <DisplayList />
          </Context.Provider>
       </div>
    </div>
  )
}

export default Input