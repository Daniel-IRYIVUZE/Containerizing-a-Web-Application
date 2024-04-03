import React, { useState } from 'react';

export const AddTodo = ({ todos, setTodos }) => {
  const [todoname, setTodoName] = useState('');

  const addTodos = () => {
    if (todoname !== '') {
      setTodos([...todos, { id: todos.length + 1, name: todoname, status: false }]);
      setTodoName('');
    } else {
      alert('Kindly add an activity to do!!!');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodos();
    }
  };

  return (
    <>
      <div className='bg-white p-2 w-full mt-29 rounded-md w-30'>
        <h2 className='text-2xl text-slate-600 font-bold rounded'> Add Task to Do </h2>
        <input
          onChange={(event) => setTodoName(event.target.value)}
          onKeyPress={handleKeyPress}
          value={todoname}
          type='text'
          className='p-2 bg-slate-300 w-full mt-2 outline-none rounded-md'
          placeholder='Enter Activity'
        />
        <button
          onClick={addTodos}
          className='p-2 bg-slate-600 text-white w-full mt-3 font-bold rounded-md'
        >
          Add now
        </button>
      </div>
    </>
  );
};
