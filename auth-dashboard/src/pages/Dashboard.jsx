import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskLIst";

function Dashboard() {
  const [tasks, setTask] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build Portfolio", completed: true },
    { id: 3, title: "Apply for Jobs", completed: false },
  ]);

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTask([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-8">
        <h2 className="text-3xl font-bold">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Total Task" value={total} />
          <StatsCard title="Completed" value={completed} />
          <StatsCard title="Pending" value={pending} />
        </div>

        <TaskForm addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default Dashboard;
