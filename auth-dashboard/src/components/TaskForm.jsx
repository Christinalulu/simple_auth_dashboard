import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      {/* Input wrapper med fokus-effekt */}
      <div className={`flex-1 flex items-center gap-3 bg-white rounded-2xl px-4 border-2 transition-all duration-200 shadow-sm ${
        isFocused 
          ? "border-fuchsia-300 shadow-fuchsia-100 shadow-md" 
          : "border-slate-100"
      }`}>
        {/* Ikon */}
        <svg className="w-4 h-4 text-slate-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="12" cy="12" r="9"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        
        {/* Input felt */}
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
          className="flex-1 py-3.5 text-sm font-semibold text-slate-700 placeholder-slate-300 outline-none bg-transparent"
        />
      </div>

      {/* Add knapp med gradient */}
      <button
        type="submit"
        disabled={!title.trim()}
        className={`px-5 py-3 rounded-2xl text-sm font-black transition-all duration-200 ${
          title.trim()
            ? "bg-gradient-to-r from-pink-400 to-fuchsia-500 text-white shadow-md shadow-fuchsia-200 hover:shadow-lg hover:-translate-y-0.5"
            : "bg-slate-100 text-slate-400 cursor-not-allowed"
        }`}
      >
        Add task
      </button>
    </form>
  );
};

export default TaskForm;