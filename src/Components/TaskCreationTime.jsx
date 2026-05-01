function TaskCreationTime({ createdAt }) {
  return (
    <p className="time-info">
      Created: {new Date(createdAt).toLocaleString()}
    </p>
  );
}

export default TaskCreationTime;