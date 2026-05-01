import { useState, useEffect } from "react";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import AverageCompletionTime from "./Components/AverageCompletionTime";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),             
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,                      
    };
    setTasks([...tasks, newTask]); 
  };

  const completeTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, completed: true, completedAt: new Date().toISOString() }
        : task 
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1> To-Do List</h1>
      <TaskInput onAdd={addTask} />
      <AverageCompletionTime tasks={tasks} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
