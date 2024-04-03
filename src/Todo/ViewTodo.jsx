import React, { useState, useEffect } from 'react';

export const ViewTodo = ({ todos, setTodos }) => {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTodoName, setEditedTodoName] = useState('');

  useEffect(() => {
    // Load todos from local storage when component mounts
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const saveTodosToLocalStorage = (updatedTodos) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    if (window.confirm('Do you want to delete this item?')) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
      saveTodosToLocalStorage(newTodos);
    }
  };

  const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  const handleEdit = (id) => {
    setEditingTodoId(id);
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditedTodoName(todoToEdit.name);
  };

  const handleConfirmEdit = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          name: editedTodoName,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    setEditingTodoId(null);
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      handleConfirmEdit(id);
    }
  };

  return (
    <>
      <div className='bg-slate-100 text-2xl p-2 text-slate-600 font-bold rounded'>
        Manage your Activities
      </div>
      <div className='columns-3 bg-slate-600 p-2'>
        <p className='font-bold text-white'> Todo Name</p>
        <p className='font-bold text-white'> Todo Status</p>
        <p className='font-bold text-white'> Todo Actions</p>
      </div>
      {todos.map((todo, index) => (
        <div key={index} className='columns-3 bg-slate-100 p-2'>
          {editingTodoId === todo.id ? (
            <>
              <input 
                type='text'
                value={editedTodoName}
                onChange={(e) => setEditedTodoName(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, todo.id)}
                className='p-2 bg-slate-300 w-full mt-2 outline-none rounded w-30 w-full'/>
              <button
                onClick={() => handleConfirmEdit(todo.id)}
                className='bg-green-500 text-xs text-white p-2 rounded mt-2'
              >
                Confirm
              </button>
            </>
          ) : (
            <>
              <p className='font-bold text-gray-600'> {todo.name}</p>
              <p className='font-bold text-gray-600'>
                {todo.status ? 'Completed' : 'Progressing'}
              </p>
              <p className='font-bold text-gray-600'>
                <div className='flex gap-2 justify-end'>
                  <button
                    onClick={() => updateTodo(todo.id)}
                    className='bg-green-500 text-xs text-white p-1 rounded-md'
                  >
                    Status
                  </button>
                  <button
                    onClick={() => handleEdit(todo.id)}
                    className='bg-blue-500 text-xs text-white p-1 rounded-md'
                  >
                    Modify
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className='bg-red-500 text-xs text-white p-1 rounded-md'
                  >
                    Delete
                  </button>
                </div>
              </p>
            </>
          )}
        </div>
      ))}
    </>
  );
};
