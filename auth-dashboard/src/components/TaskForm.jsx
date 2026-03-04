import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handelSubmit}
      className="bg-white p-4 rounded-xl shadow-md flex gap-3"
    >
      <input
        type="text"
        placeholder="Add new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
