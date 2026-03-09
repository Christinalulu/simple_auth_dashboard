import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";  // Fikset import-navn

function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [searchFocused, setSearchFocused] = useState(false); // Manglet!

  // Filter-knapper
  const filterBtns = ["all", "pending", "completed"]; // Manglet!

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
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

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

  const editTask = (id, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle } : task,
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-slate-50 to-sky-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-black text-slate-800">
              My Dashboard
            </h1>
            <p className="text-slate-500 mt-1">
              Here's what's on your plate today ☀️
            </p>
          </div>

          {total > 0 && (
            <div className="bg-white rounded-2xl px-5 py-4 border border-slate-100 shadow-sm min-w-44">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">
                  Progress
                </span>
                <span className="text-sm font-bold text-fuchsia-500">
                  {progress}%
                </span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 to-fuchsia-500 transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <StatsCard 
            title="Total Task" 
            value={total}
            gradient="bg-gradient-to-br from-pink-50 to-white"
            iconBg="bg-pink-100"
            valueColor="text-pink-500"
            icon={
              <svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            }
          />
          <StatsCard 
            title="Completed" 
            value={completed}
            gradient="bg-gradient-to-br from-emerald-50 to-white"
            iconBg="bg-emerald-100"
            valueColor="text-emerald-500"
            icon={
              <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
          <StatsCard 
            title="Pending" 
            value={pending}
            gradient="bg-gradient-to-br from-amber-50 to-white"
            iconBg="bg-amber-100"
            valueColor="text-amber-500"
            icon={
              <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* Task Panel */}
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl border border-white shadow-sm p-6 space-y-5">
          <h2 className="text-lg font-black text-slate-700">Tasks</h2>

          <TaskForm addTask={addTask} />

          {/* Search + Filters */}
          <div className="flex flex-wrap gap-3 items-center">
            <div
              className={`flex-1 min-w-48 flex items-center gap-2.5 bg-white rounded-xl px-4 border-2 transition-all duration-200 ${
                searchFocused
                  ? "border-fuchsia-300 shadow-sm"
                  : "border-slate-100"
              }`}
            >
              <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 py-2.5 text-sm text-slate-700 outline-none bg-transparent"
              />
            </div>

            <div className="flex gap-2">
              {filterBtns.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold capitalize transition-all duration-200 ${
                    filter === f
                      ? "bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white shadow-md shadow-fuchsia-200"
                      : "bg-white border border-slate-200 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;