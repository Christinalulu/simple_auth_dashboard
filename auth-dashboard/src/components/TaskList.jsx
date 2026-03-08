import TaskItem from "./TaskItem";


const TaskList = ({ tasks, toggleTask, deleteTask, editTask}) => {
return (
    <div className="mt-6 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </div>
  );

};

export default TaskList;
