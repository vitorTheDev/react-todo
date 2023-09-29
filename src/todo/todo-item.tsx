import { TodoItemModel } from './todo-item-model';

function TodoItem({ item, onDelete }: { item: TodoItemModel, onDelete: (todo: TodoItemModel) => void, }) {

  return (<li className="min-w-[15rem] flex flex-row justify-between m-2">
    <div>{item.description}</div>
    <button className='font-bold text-red-600 p-1' onClick={() => onDelete(item)}>X</button>
  </li>)
}

export default TodoItem