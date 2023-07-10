import React, { useEffect } from "react";
import { useState } from "react";
//COMPONENTS
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

function App() {
  const storedTasks = localStorage.getItem("tasks");

  const [filterKey, setFilterKey] = useState("all");

  //If local storage has tasks, use them, otherwise use an empty array
  const [tasks, setTasks] = useState(
    storedTasks ? JSON.parse(storedTasks) : []
  );

  useEffect(() => {
    // Save tasks to local storage whenever they change
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Adds a task to the tasks array
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  //Deletes the task at the given index
  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  //Toggles complete status
  function handleCompleteTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  // Updates a task at the given index
  function handleEditTask(index, editedTask) {
    const newTasks = [...tasks];
    newTasks[index] = editedTask;
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>Rubus</h1>
      <TaskForm addTask={addTask} />

      <div>
        <h2>Tasks</h2>
        <select
          name="filter"
          id="filter"
          value={filterKey}
          onChange={(e) => setFilterKey(e.target.value)}
        >
          <option value="all">All</option>
          <option value="electrical">Electrical</option>
          <option value="plumbing">Plumbing</option>
          <option value="framing">Framing</option>
        </select>
        <TaskCard
          tasks={tasks}
          deleteTask={deleteTask}
          handleCompleteTask={handleCompleteTask}
          handleEditTask={handleEditTask}
          filterKey={filterKey}
        />
      </div>
    </div>
  );
}

export default App;
