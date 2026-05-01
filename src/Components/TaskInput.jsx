import { useState } from "react";
function TaskInput({ onAdd }) {
  const [text, setText] = useState(""); 

  const handleSubmit = () => {
    if (text.trim() === "") return; 
    onAdd(text.trim());            
    setText("");                   
  };

  return (
    <div className="task-input">
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()} 
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
}

export default TaskInput;