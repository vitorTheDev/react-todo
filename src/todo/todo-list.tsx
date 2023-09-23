import { useState } from 'react';
import { TodoItemModel } from './todo-item-model';
import TodoItem from './todo-item';

export const TODOS_STORAGE_KEY = 'REACT_TODOS'

function TodoList() {

  const [todos, setTodos] = useState((JSON.parse(localStorage.getKey(TODOS_STORAGE_KEY)) ?? []) as TodoItemModel[])

  const addTodo = (todo: TodoItemModel) => {
    setTodos([...todos, todo])
    updateStorage()
  }

  const updateTodo = (todo: TodoItemModel) => {
    setTodos([...todos.filter(v => v.id !== todo.id), todo])
    updateStorage()
  }

  const deleteTodo = (todo: TodoItemModel) => {
    setTodos([...todos.filter(v => v.id !== todo.id)])
    updateStorage()
  }

  const updateStorage = () => {
    localStorage.setKey(TODOS_STORAGE_KEY, JSON.stringify(todos))
  }

  return (<>
    <ul>
      {todos.map(todo => (<TodoItem></TodoItem>))}
    </ul>
  </>)
}

export default TodoList