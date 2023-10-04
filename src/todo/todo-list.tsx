import { useState, useEffect } from 'react';
import { TodoItemModel } from './todo-item-model';
import TodoItem from './todo-item';
import TodoForm from './todo-form';
import { connectDb, useDb } from '../db/db-provider';

function TodoList() {
  const db = useDb()
  const [todos, setTodos] = useState([] as TodoItemModel[])

  useEffect(() => {
    (async () => {
      console.log('connect')
      await connectDb(db)
      const todosData = await db?.select('todo') as TodoItemModel[]
      if (todosData) {
        setTodos(todosData)
      }
    })();
  }, [])

  const addTodo = async (todo: TodoItemModel) => {
    const newTodo = await db?.create('todo', todo)
    setTodos([...todos, newTodo])
  }

  const deleteTodo = async (todo: TodoItemModel) => {
    setTodos([...todos.filter(v => v.id !== todo.id)])
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