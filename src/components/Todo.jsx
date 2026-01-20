import React, { useEffect, useState } from 'react'

function Todo() {
    const [todos,setTodo] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/todos").then(res => res.json()).then(data => {
            setTodo(data.todos);
        })
    },[])



  return (
    <div>
        <h1>Todo list</h1>
        <p>Total Todos: {todos.length}</p>
        <ul>{todos.map(todo =>(
        <li><span>{todo.todo}</span><span>{todo.completed?"✅ Completed" : "❌ Not completed"}</span></li>
        ))}</ul>
    </div>
  )
}

export default Todo

