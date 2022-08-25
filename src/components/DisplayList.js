import React, { useContext } from 'react'
import { Context } from './Input';

const  DisplayList = () => {

  const {toDo, deleteTask} = useContext(Context);
  
  return (
    <div> {
      toDo.map((todo, index) => (
      <div>
        <h4 className='content'>{todo} 
           &nbsp;&nbsp; 
          <button onClick={() => deleteTask(index)} className ='delete-btn'>X</button>
        </h4>
    </div>
        ))
    } </div>
  )
}

export default DisplayList