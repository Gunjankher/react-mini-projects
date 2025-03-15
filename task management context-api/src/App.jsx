import { useState } from "react";
import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]); // Fix: Initialized as an array

  // Add Task
  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Toggle Task Completion
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  // Remove Task (Fix: Added `id` parameter)
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Clear All Tasks
  const clearTask = () => {
    setTasks([]);
  };

  return (
    <TaskProvider value={{ tasks, addTask, toggleTask, removeTask, clearTask }}>
      <h1 className="text-red-500">This is a task management app</h1>
      <TaskForm />

      {/* Task List */}
      <div>
        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet.</p>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </TaskProvider>
  );
}

export default App
