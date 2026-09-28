"use client";

import { useState } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Finish assignment", completed: false },
    { id: 2, text: "Study Next.js", completed: false },
    { id: 3, text: "Setup Git repository", completed: true },
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function addTask() {
    const text = input.trim();
    if (!text) {
      setError("Please enter a task before adding.");
      return;
    }
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
    setInput("");
    setError("");
  }

  function toggleTask(id: number) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <main className="wrap">
      <h1>My ToDo App</h1>

      <div className="row">
        <input
          type="text"
          value={input}
          placeholder="Enter a task..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          aria-label="New task"
        />
        <button className="add" onClick={addTask}>
          Add Task
        </button>
      </div>
      {error && <p className="error">{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? "done" : ""}>{task.text}</span>
            </label>
 <button className="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
                      </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty">No tasks yet. Add one above.</p>
      )}

      <style>{`
        .wrap { max-width: 520px; margin: 0 auto; padding: 48px 20px; font-family: system-ui, sans-serif; }
        h1 { font-size: 2rem; margin-bottom: 24px; }
        .row { display: flex; gap: 8px; }
        .row input { flex: 1; padding: 10px 12px; font-size: 1rem; border: 1px solid #888; border-radius: 6px; background: transparent; color: inherit; }
        button { font-size: 0.95rem; padding: 10px 14px; border: none; border-radius: 6px; cursor: pointer; }
        button:focus-visible, input:focus-visible { outline: 2px solid #2563eb; outline-offset: 2px; }
        .add { background: #2563eb; color: #fff; }
        .delete { background: #fee2e2; color: #991b1b; }
        .error { color: #dc2626; margin: 8px 0 0; }
        .empty { opacity: 0.7; margin-top: 16px; }
        ul { list-style: none; padding: 0; margin: 24px 0 0; }
        li { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(128, 128, 128, 0.35); }
        label { display: flex; align-items: center; gap: 10px; cursor: pointer; }
        .done { text-decoration: line-through; opacity: 0.55; }
      `}</style>
    </main>
  );
}