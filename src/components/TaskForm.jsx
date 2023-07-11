import React, { useState } from "react";
import "../../componentStyles/taskForm.scss";

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState({
    description: "",
    category: "",
    dueDate: "",
    completed: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    addTask(task);
    setTask({
      description: "",
      category: "",
      dueDate: "",
      completed: false,
    });
  }

  return (
    <form className="taskForm" onSubmit={handleSubmit} action="submit">
      <textarea
        required
        name="description"
        placeholder="description..."
        id="description"
        rows="5"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      ></textarea>
      <select
        required
        onChange={(e) => setTask({ ...task, category: e.target.value })}
        name="category"
        id="category"
        value={task.category}
      >
        <option value="">--Please choose an option--</option>
        <option value="plumbing">Plumbing</option>
        <option value="electrical">Electrical</option>
        <option value="framing">Framing</option>
      </select>
      <input
        required
        type="date"
        value={task?.dueDate}
        onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
