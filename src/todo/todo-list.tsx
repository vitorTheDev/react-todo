import { useState } from 'react';
import { TodoItemModel } from './todo-item-model';
import TodoItem from './todo-item';
import TodoForm from './todo-form';

export const TODOS_STORAGE_KEY = 'REACT_TODOS'

function TodoList() {

  const [todos, setTodos] = useState((JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY) ?? 'null') ?? []) as TodoItemModel[])

  const addTodo = (todo: TodoItemModel) => {
    setTodos([...todos, todo])
    updateStorage()
  }

  const deleteTodo = (todo: TodoItemModel) => {
    setTodos([...todos.filter(v => v.id !== todo.id)])
    updateStorage()
  }

  const updateStorage = () => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
  }

  return (<>
    <TodoForm onAdd={addTodo}></TodoForm>
    <ul>
      {todos.map(todo => (<TodoItem item={todo} onDelete={deleteTodo}></TodoItem>))}
    </ul>
  </>)
}

export default TodoList