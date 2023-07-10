import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const TaskItem = ({
  task,
  index,
  editMode,
  editingTaskIndex,
  editedTask,
  setEditedTask,
  startEditTask,
  handleSave,
  deleteTask,
  handleCompleteTask,
}) => {
  if (editMode && editingTaskIndex === index) {
    return (
      <div className="editTask">
        <textarea
          required
          name="description"
          placeholder="description..."
          id="description"
          value={editedTask.description}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              description: e.target.value,
            })
          }
        />
        <select
          required
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              category: e.target.value,
            })
          }
          name="category"
          id="category"
          value={editedTask.category}
        >
          <option value="">--Please choose an option--</option>
          <option value="plumbing">Plumbing</option>
          <option value="electrical">Electrical</option>
          <option value="framing">Framing</option>
        </select>
        <input
          type="date"
          value={editedTask.dueDate}
          onChange={(e) =>
            setEditedTask({
              ...editedTask,
              dueDate: e.target.value,
            })
          }
        />
        <button onClick={handleSave}>Save</button>
      </div>
    );
  } else {
    return (
      <div className="task">
        <div className="taskContent">
          <div className="categoryDateContainer">
            <p className={`${task.category} category`}>{task.category}</p>
            <p className="dueDate">{task.dueDate}</p>
          </div>
          <div className="descriptionContainer">
            <p>{task.description}</p>
            <FontAwesomeIcon
              color="black"
              onClick={() => startEditTask(index)}
              icon={faEdit}
            />
          </div>
          <div className="buttonDiv">
            <button onClick={() => deleteTask(index)}>Delete</button>
            <button onClick={() => handleCompleteTask(index)}>
              {task.completed ? "Uncomplete" : "Complete"}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TaskItem;
