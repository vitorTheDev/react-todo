import { useState, useEffect } from 'react';
import { TodoItemModel } from './todo-item-model';
import TodoItem from './todo-item';
import TodoForm from './todo-form';
import { surrealDb } from '../db/db';

export const TODOS_STORAGE_KEY = 'REACT_TODOS'

function TodoList() {
  useEffect(() => {
    (async () => {
      const db = await surrealDb();
      (window as any).db = db
      const todosData = await db?.select('todo') as TodoItemModel[]
      if (todosData) {
        setTodos(todosData)
      }
    })();
  }, [])

  const [todos, setTodos] = useState([] as TodoItemModel[])

  const addTodo = async (todo: TodoItemModel) => {
    const db = await surrealDb()
    const newTodo = await db?.create('todo', todo)
    setTodos([...todos, newTodo])
  }

  const deleteTodo = async (todo: TodoItemModel) => {
    setTodos([...todos.filter(v => v.id !== todo.id)])
    const db = await surrealDb()
    await db?.delete(todo.id as string)
  }

  return (<>
    <TodoForm onAdd={addTodo}></TodoForm>
    <ul>
      {todos.map((todo, idx) => (<TodoItem item={todo} key={idx} onDelete={deleteTodo}></TodoItem>))}
    </ul>
  </>)
}

export default TodoList