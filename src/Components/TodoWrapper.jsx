import React, { useState } from 'react'
import TodoForm from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import { Todo } from './Todo';
uuidv4();

export default function TodoWrapper() {
  const [todos,setTodos]=useState([])

  const addTodo=todo=>{
    setTodos([...todos,{id:uuidv4(),task:todo,
    completed:false,isEditing:false}])
  }
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      {/* 18.45 */}
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo,index)=>(
          <Todo task={todo} key={index}/>
        ))}
        

    </div>
  )
}
