import { useState } from "react";
const Todo = () => {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (text.trim() !== "") {
      if (!todoList.includes(text)) {
        let newTodoList = [...todoList, text];
        setTodoList(newTodoList);
      } else {
        alert(`${text} already exists`);
      }
      setText("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setText(todoList[index]);
  };

  const handleSaveEdit = (index) => {
    if (text.trim() !== "") {
      if (!todoList.includes(text) || index === todoList.indexOf(text)) {
        let updatedTodoList = [...todoList];
        updatedTodoList[index] = text;
        setTodoList(updatedTodoList);
        setEditIndex(null);
        
      } else {
        alert(`${text} already exists`);
      }
    } else {
      alert("Task cannot be empty");
    }
    setText("");
  };
  
  const handleCancelEdit = () => {
    setEditIndex(null);
    setText("");
  };

  const handleDelete = (index) => {
    let filteredTodos = todoList.filter((val, i) => index !== i);
    setTodoList(filteredTodos);
    setEditIndex(null);
  };

  return (
    <div className="main-container">
      <div className="center-div">
        <h1>Todo List</h1>
        <div className="input-div">
          <input
            type="text"
            placeholder="Enter your task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          {editIndex !== null ? (
            <span>
              <button
                onClick={() => handleSaveEdit(editIndex)}
                className="edit-btn"
              >
                Save
              </button>
              <button onClick={handleCancelEdit} className="edit-btn">
                Cancel
              </button>
            </span>
          ) : (
            <button onClick={handleAdd} className="add-btn">
              Add
            </button>
          )}
        </div>

        <div className="todo-list">
          <ul>
            {todoList.map((todo, index) => (
              <li key={index} className="task-item">
                {todo}
                <div className="button-container">
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-primary m-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-danger m-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
