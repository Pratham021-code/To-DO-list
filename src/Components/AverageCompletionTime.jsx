function AverageCompletionTime({ tasks }) {
  const completedTasks = tasks.filter((task) => task.completedAt !== null);

  if (completedTasks.length === 0) {
    return <p className="avg-time"> No completed tasks yet to calculate average.</p>;
  }
  const totalMs = completedTasks.reduce((sum, task) => {
    const created = new Date(task.createdAt);
    const completed = new Date(task.completedAt);
    return sum + (completed - created); 
  }, 0);

  const avgMs = totalMs / completedTasks.length;
  const avgMinutes = Math.floor(avgMs / 1000 / 60);   
  const avgSeconds = Math.floor((avgMs / 1000) % 60); 

  return (
    <p className="avg-time">
      Avg completion time: {avgMinutes}m {avgSeconds}s
      (across {completedTasks.length} task{completedTasks.length > 1 ? "s" : ""})
    </p>
  );
}

export default AverageCompletionTime;