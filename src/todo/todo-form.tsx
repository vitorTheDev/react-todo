import { TodoItemModel } from './todo-item-model';
import { useState } from 'react';

function TodoForm({ onAdd }: { onAdd: (todo: TodoItemModel) => void}) {
  const [description, setDescription] = useState('')
  const descriptionChanged = (e: any) => {
    setDescription(e.target.value)
  }
  const handleSubmit = (e: any) => {
    e?.preventDefault();
    if (description) {
      onAdd?.({description})
    }
  }

  return (<form onSubmit={handleSubmit}>
    <div className="min-w-[15rem] flex flex-row justify-between gap-3 m-2">
      <input className="border-2 rounded-md" onChange={descriptionChanged}></input>
      <button className="p-1 shadow-md active:shadow-lg border-2 rounded-md" type="submit">Adicionar</button>
    </div>
  </form>)
}

export default TodoForm