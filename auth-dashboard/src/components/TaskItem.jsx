import { useState } from "react";

const TaskItem = ({ task, toggleTask, deleteTask, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSave = () => {
    if (!newTitle.trim()) return;
    editTask(task.id, newTitle);
    setEditing(false);
  };

  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-200 group">
      {/* Checkbox med gradient */}
      <button
        onClick={() => toggleTask(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          task.completed
            ? "bg-gradient-to-br from-emerald-400 to-teal-500 border-transparent shadow-md shadow-emerald-200"
            : "border-slate-300 hover:border-pink-300"
        }`}
      >
        {task.completed && (
          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      {/* Title / Edit område */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={(e) => { 
              if (e.key === "Enter") handleSave(); 
              if (e.key === "Escape") setEditing(false); 
            }}
            autoFocus
            className="w-full border-2 border-pink-300 rounded-xl px-3 py-1.5 text-sm font-semibold text-slate-800 outline-none focus:ring-4 focus:ring-pink-100 bg-pink-50/50"
          />
        ) : (
          <span className={`text-sm font-semibold transition-all duration-200 ${
            task.completed ? "line-through text-slate-400" : "text-slate-700"
          }`}>
            {task.title}
          </span>
        )}
      </div>

      {/* Actions knapper */}
      <div className="flex gap-2 flex-shrink-0">
        {isEditing ? (
          <>
            <button 
              onClick={handleSave} 
              className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-bold hover:bg-emerald-100 transition-colors"
            >
              Save
            </button>
            <button 
              onClick={() => setEditing(false)} 
              className="px-3 py-1.5 rounded-lg bg-slate-50 text-slate-500 text-xs font-bold hover:bg-slate-100 transition-colors"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button 
              onClick={() => { 
                setEditing(true); 
                setNewTitle(task.title); 
              }}
              className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-500 text-xs font-bold opacity-0 group-hover:opacity-100 hover:bg-blue-100 transition-all duration-150 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H9v-2a2 2 0 01.586-1.414z"/>
              </svg>
              Edit
            </button>
            <button 
              onClick={() => deleteTask(task.id)}
              className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-500 text-xs font-bold opacity-0 group-hover:opacity-100 hover:bg-rose-100 transition-all duration-150 flex items-center gap-1"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;