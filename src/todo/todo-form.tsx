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
      setDescription('')
    }
  }

  return (<form onSubmit={handleSubmit}>
    <div className="min-w-[15rem] max-w-2xl w-[100dvw] flex flex-row justify-between gap-4 py-4 px-6">
      <input className="border-2 rounded-md w-full" onChange={descriptionChanged} value={description}></input>
      <button className="p-2 shadow-md active:shadow-lg border-2 rounded-md" type="submit">Adicionar</button>
    </div>
  </form>)
}

export default TodoForm