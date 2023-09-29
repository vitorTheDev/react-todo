import { TodoItemModel } from './todo-item-model';

function TodoItem({ item, onDelete }: { item: TodoItemModel, onDelete: (todo: TodoItemModel) => void, }) {

  return (<li className="min-w-[15rem] max-w-2xl w-[100dvw] flex flex-row justify-between px-[1.6rem] py-3">
    <div className="text-lg">{item.description}</div>
    <button className='font-bold text-red-600 py1 px-2 shadow-md hover:shadow-lg text-lg' onClick={() => onDelete(item)}>X</button>
  </li>)
}

export default TodoItem