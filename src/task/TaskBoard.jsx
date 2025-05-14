import { useState } from "react";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskTable from "./TaskTable";

export default function TaskBoard() {
  const task = {
    id: crypto.randomUUID(),
    title: "Be Frontend Engineer",
    description: "Be a junior Frontend Engineer (React & Next JS).",
    tags: ["react", "next JS", "javaScript"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([task]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <form>
            <div className="flex">
              <SearchTask />
            </div>
          </form>
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />

          <TaskTable tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
