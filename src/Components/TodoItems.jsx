import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, deleteItems }) => {
  if (todoItems.length === 0) {
    return <div className="no-items">No Items to display</div>;
  }
  return (
    <div className="items-container">
      {todoItems.map((item, index) => {
        return (
          <TodoItem
            key={index}
            name={item.name}
            dueDate={item.dueDate}
            deleteItems={deleteItems}
          ></TodoItem>
        );
      })}
    </div>
  );
};
export default TodoItems;
