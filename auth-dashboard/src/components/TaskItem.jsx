import { useState } from "react";

const TaskItem = ({ task, toggleTask, deleteTask, editTask}) => {

   const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);
  

  const handleSave = () => {
    if (!newTitle.trim()) return;

    editTask(task.id, newTitle);
    setEditing(false);
  };

     return (
     <div className="flex justify-between items-center bg-white p-3 rounded shadow">

      {isEditing ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border p-1 rounded flex-1 mr-3"
        />
      ) : (
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />

          <span className={task.completed ? "line-through text-gray-400" : ""}>
            {task.title}
          </span>
        </div>
      )}

      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="text-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-blue-500"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500"
        >
          Delete
        </button>
      </div>

    </div>
  );


}

export default TaskItem;