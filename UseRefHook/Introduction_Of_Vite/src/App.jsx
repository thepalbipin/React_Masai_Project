import './App.css'
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos([...todos, todo])
  }

  return (
    <>
      <h1>Todo App</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input type="text" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTodo(e.target.value)
          e.target.value = ''
        }
      }} />
    </>
  )
}

export default App

