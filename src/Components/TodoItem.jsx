const TodoItem = ({ name, dueDate, deleteItems }) => {
  const handleOnClick = (e) => {
    // console.log(name, dueDate);
    deleteItems(name);
  };
  return (
    <div className="row alter-row">
      <div className="col-6">{name}</div>
      <div className="col-4">{dueDate}</div>
      <div className="col-2">
        <button
          type="button "
          className="btn btn-danger alter-button"
          onClick={handleOnClick}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
