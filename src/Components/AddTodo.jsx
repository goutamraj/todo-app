import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [itemName, setItemName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (e) => {
    setItemName(e.target.value);
    // setItemName();
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
    // setDueDate();
  };

  const handleOnClick = () => {
    if (itemName && dueDate) {
      onNewItem(itemName, dueDate);
      setItemName("");
      setDueDate("");
    } else if (itemName) {
      alert("Please enter a due date.");
    } else if (dueDate) {
      alert("Please enter an item name.");
    } else {
      alert("Please enter both item name and due date.");
    }
  };
  return (
    <div className="row alter-row">
      <div className="col-6">
        <input
          placeholder="Enter Todo here"
          onChange={handleNameChange}
          value={itemName}
        ></input>
      </div>
      <div className="col-4">
        <input type="date" onChange={handleDateChange} value={dueDate}></input>
      </div>
      <div className="col-2">
        <button
          type="button "
          className="btn btn-success alter-button"
          onClick={handleOnClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
