import React, { useState } from 'react';
import './App.css';
import { MdOutlineDoneOutline } from 'react-icons/md';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [deadline, setDeadline] = useState('');
  const [showCongrats, setShowCongrats] = useState(false);

  const addTodo = () => {
    if (input.trim() !== '') {
      const newTodo = {
        text: input.trim(),
        deadline: deadline.trim(),
      };

      setTodos([...todos, newTodo]);
      setInput('');
      setDeadline('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
    }, 500);
  };

  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
      <div className="TodoInput">
        <input
          type="text"
          placeholder="Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      {showCongrats && (
        <div className="CongratsMessage" style={{ color: 'yellow' }}>
          Great Work!
        </div>
      )}
      <ul className="TodoList">
        {todos.map((todo, index) => (
          <li key={index} className="TodoItem">
            <div>
              {todo.text}
              {todo.deadline && (
                <span className="DeadlineBox">Deadline: {todo.deadline}</span>
              )}
              <button onClick={() => deleteTodo(index)}>
                <MdOutlineDoneOutline />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
