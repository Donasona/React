import React, { useState } from 'react'

function Todo() {
    const [todos,setTodo] = useState([])
  return (
    <div>
        <h1>Todo list</h1>
        <p>Total Todos: {todos.length}</p>
    </div>
  )
}

export default Todo

