import React, { useState } from "react";
import TaskItem from "./TaskItem";

import "../../componentStyles/TaskCard.scss";

export default function TaskCard({
  tasks,
  deleteTask,
  handleCompleteTask,
  handleEditTask,
  filterKey,
}) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState({});
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);

  const startEditTask = (index) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
    setEditMode(true);
  };

  const handleSave = () => {
    handleEditTask(editingTaskIndex, editedTask);
    setEditMode(false);
    setEditingTaskIndex(null);
    setEditedTask({});
  };

  return (
    <div className="taskList">
      {tasks.length > 0
        ? tasks.map((task, index) => {
            if (task.category === filterKey || filterKey === "all") {
              return (
                <div
                  key={index}
                  className={
                    task.completed ? "completedTask" : "uncompletedTask"
                  }
                >
                  <TaskItem
                    task={task}
                    index={index}
                    editMode={editMode}
                    editingTaskIndex={editingTaskIndex}
                    editedTask={editedTask}
                    setEditedTask={setEditedTask}
                    startEditTask={startEditTask}
                    handleSave={handleSave}
                    deleteTask={deleteTask}
                    handleCompleteTask={handleCompleteTask}
                  />
                </div>
              );
            }
          })
        : "No tasks to show"}
    </div>
  );
}
