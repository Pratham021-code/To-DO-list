function TaskCompletionTime({ completedAt }) {
  if (!completedAt) {
    return <p className="time-info"> Not completed yet</p>;
  }

  return (
    <p className="time-info">
      Completed: {new Date(completedAt).toLocaleString()}
    </p>
  );
}

export default TaskCompletionTime;
