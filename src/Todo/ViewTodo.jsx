import React from 'react'
import {useState} from 'react'
export const ViewTodo = ({todos, setTodos}) => {
  const DeleteTodo= (id) => {
    alert("Do you want to delete this Activity !!!")
    const nw_data = todos.filter(todo => todo.id !== id)
    setTodos(nw_data)
  }

  const UpdateTodo= (id) => {
    const nw_data = todos.map(todo => {
if (todo.id === id)
{
  alert("Are you done?")
  return {
    ...todo,
   status: !todo.status
  }
}
return todo
    })
    setTodos(nw_data)   

  }

  return (
    <>
      <div className='columns-3 bg-green-600 p-2'>
        <p className='font-bold text-white'> Todo Name</p>
        <p className='font-bold text-white'> Todo Status</p>
        <p className='font-bold text-white'> Todo Actions</p>
      </div>
      {todos.map((todo, index) => (
  <div key={index} className='columns-3 bg-slate-100 p-2 rounded-md'>
  <p className='font-bold text-gray-600'> {todo.name}</p>
  <p className='font-bold text-gray-600'> {todo.status ? "Completed" : "In progress"}</p>
  <p className='font-bold text-gray-600'>
    <div className='flex gap-2 justfy-end'>
    <button onClick={()=>DeleteTodo(todo.id)} className='bg-red-500 text-xs text-white p-1 rounded-full'>Delete</button>
    <button onClick={()=>UpdateTodo(todo.id)} className='bg-green-500 text-xs text-white p-1 rounded-full'>Update</button>
</div> 
  </p>
</div>
      ))}
    </>
  )
}
