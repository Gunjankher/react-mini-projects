import React from 'react'
import { useTasks } from '../context/TaskContext'

function TaskItem({ task }) {
  const { toggleTask, removeTask } = useTasks()

  return (
    <div className="flex justify-between items-center border p-2 mb-2">
      <span
        onClick={() => toggleTask(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)} className="text-red-500">
        ❌
      </button>
    </div>
  )
}

export default TaskItem
