

const TaskItem = ({ task, toggleTask, deleteTask}) => {


     return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow">
      
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          className={task.completed ? "line-through text-gray-400" : ""}
        >
          {task.title}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>

    </div>
  );


}

export default TaskItem;