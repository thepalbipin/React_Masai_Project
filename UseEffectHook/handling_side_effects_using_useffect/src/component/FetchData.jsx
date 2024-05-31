import React, { useEffect, useState } from 'react';

function FetchData() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);

  return (
    <div className="FetchData">
      <header className="FetchData-header">
        <h1>Todos</h1>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default FetchData;


