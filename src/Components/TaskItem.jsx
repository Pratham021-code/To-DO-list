import TaskCreationTime from "./TaskCreationTime";
import TaskCompletionTime from "./TaskCompletionTime";

function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <p className="task-text">{task.text}</p>

      <TaskCreationTime createdAt={task.createdAt} />
      <TaskCompletionTime completedAt={task.completedAt} />

      <div className="task-buttons">
        {/* Only show Complete button if task isn't done yet */}
        {!task.completed && (
          <button onClick={() => onComplete(task.id)}>Complete</button>
        )}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskItem;