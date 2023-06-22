import { useState } from 'react';

const TaskForm = () => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle task creation using API calls
    // Reset the taskName state
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
