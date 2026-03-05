import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskLIst";

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredTasks = tasks.filter((task) => {
    const matchesFilter =
      filter === "completed"
        ? task.completed
        : filter === "pending"
          ? !task.completed
          : true;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });



  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
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

      <div className="p-8 space-y-4                                                                                                                                                                                                                                                                                          ">
        <h2 className="text-3xl font-bold">Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard title="Total Task" value={total} />
          <StatsCard title="Completed" value={completed} />
          <StatsCard title="Pending" value={pending} />
        </div>

        <TaskForm addTask={addTask} />

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
                                                                                                                      
        <div className="flex gap-3">
          <button
            onClick={() => setFilter("all")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            All
          </button>

          <button
            onClick={() => setFilter("completed")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Completed
          </button>

          <button
            onClick={() => setFilter("pending")}
            className="px-3 py-1 bg-gray-200 rounded"
          >
            Pending
          </button>
        </div>
        <TaskList
          tasks={filteredTasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default Dashboard;
