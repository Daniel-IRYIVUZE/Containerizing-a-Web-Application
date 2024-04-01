import React from 'react';
import {useState} from 'react'

export const AddTodo = ({todos, setTodos}) => {
  const [todoname, setTodoName] = useState("")
  const addtodos = ()=>{
    if (todoname!==""){
      setTodos([...todos,{id:todos.length+1,name:todoname,status:false}])
      setTodoName("")
    }
    else{
      alert("Kindly add an activity to do !!!")
    }
  }
  return (
    <>
    <div className='bg-white p-2 w-full mt-29 rounded-md w-30'>
      <h2 className='text-2xl text-green-500 font-bold rounded'> Add to Do </h2>
    <input onChange={(events)=>setTodoName(events.target.value)} value={todoname} type='text' className='p-2 bg-slate-200 w-full mt-2 outline-none rounded-md' placeholder='Enter Activity'></input>
    <button onClick={()=>addtodos()} className='p-2 bg-green-400 text-grey-400 w-full mt-3 font-bold rounded-md'> Add Todo </button>
    </div>
    </>
  )
}
