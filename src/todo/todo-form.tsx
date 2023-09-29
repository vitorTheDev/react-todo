import { TodoItemModel } from './todo-item-model';
import { useState } from 'react';

function TodoForm({ onAdd }: { onAdd: (todo: TodoItemModel) => void}) {
  const [description, setDescription] = useState('')
  const descriptionChanged = (e: any) => {
    setDescription(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e?.preventDefault();
    onAdd?.({description})
  }

  return (<form onSubmit={handleSubmit}>
    <div>
      <input onChange={descriptionChanged}></input>
      <button type="submit">Adicionar</button>
    </div>
  </form>)
}

export default TodoForm