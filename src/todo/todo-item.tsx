import { TodoItemModel } from './todo-item-model';

function TodoItem({ item, onDelete }: { item: TodoItemModel, onDelete: (todo: TodoItemModel) => void, }) {

  return (<li>
    {item.description}
    <button onClick={() => onDelete(item)}>X</button>
  </li>)
}

export default TodoItem