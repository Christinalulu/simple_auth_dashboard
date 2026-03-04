import TaskItem from "./TaskItem";


const TaskList = ({ tasks, toggleTask, deleteTask}) => {
return (
    <div className="mt-6 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );

};

export default TaskList;
