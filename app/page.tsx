import { useEffect, useState } from "react";
import { Task } from "../models/tasks.model";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  async function getTasks() {
    const tasks = await Task.find().sort({ completed: -1 });
    setTasks(tasks);
  }

  useEffect(() => {
    getTasks();
  }, []);
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.completed ? " (Completed)" : ""}
          </li>
        ))}
      </ul>
    </div>
    </main>
  )
}
