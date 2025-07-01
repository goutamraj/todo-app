// import logo from './logo.svg';
// import './App.css';
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import React, { useState } from "react";
import "./App.css";
function App() {
  const initialTodoList = [
    {
      name: "Buy Milk",
      dueDate: "2025-01-26",
    },
    {
      name: "Buy Eggs",
      dueDate: "2025-01-26",
    },
    {
      name: "Buy Bread",
      dueDate: "2025-01-26",
    },
    {
      name: "Buy Butter",
      dueDate: "2025-01-26",
    },
    {
      name: "Buy Cheese",
      dueDate: "2025-01-26",
    },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoList);
  const handleNewItem = (item, dueDate) => {
    // console.log("New Item: ", item, dueDate);
    const newItem = {
      name: item,
      dueDate: dueDate,
    };
    setTodoItems([...todoItems, newItem]);
  };
  const handleDeleteItem = (name) => {
    const updatedItem = todoItems.filter((todoItem) => todoItem.name !== name);
    setTodoItems(updatedItem);
  };
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <div className="container text-center">
          <div className="items-container">
            <AddTodo onNewItem={handleNewItem}></AddTodo>
            <TodoItems
              todoItems={todoItems}
              deleteItems={handleDeleteItem}
            ></TodoItems>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
