export default function Home() {
  return (
    <main className="wrap">
      <h1>My ToDo App</h1>

      <div className="row">
        <input type="text" placeholder="Enter a task..." aria-label="New task" />
        <button className="add">Add Task</button>
      </div>

      <ul>
        <li>
          <label>
            <input type="checkbox" />
            <span>Finish assignment</span>
          </label>
          <button className="delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            <span>Study Next.js</span>
          </label>
          <button className="delete">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" defaultChecked />
            <span className="done">Setup Git repository</span>
          </label>
          <button className="delete">Delete</button>
        </li>
      </ul>

      <style>{`
        .wrap { max-width: 520px; margin: 0 auto; padding: 48px 20px; font-family: system-ui, sans-serif; }
        h1 { font-size: 2rem; margin-bottom: 24px; }
        .row { display: flex; gap: 8px; }
        .row input { flex: 1; padding: 10px 12px; font-size: 1rem; border: 1px solid #888; border-radius: 6px; background: transparent; color: inherit; }
        button { font-size: 0.95rem; padding: 10px 14px; border: none; border-radius: 6px; cursor: pointer; }
        button:focus-visible, input:focus-visible { outline: 2px solid #2563eb; outline-offset: 2px; }
        .add { background: #2563eb; color: #fff; }
        .delete { background: #fee2e2; color: #991b1b; }
        ul { list-style: none; padding: 0; margin: 24px 0 0; }
        li { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid rgba(128, 128, 128, 0.35); }
        label { display: flex; align-items: center; gap: 10px; cursor: pointer; }
        .done { text-decoration: line-through; opacity: 0.55; }
      `}</style>
    </main>
  );
}