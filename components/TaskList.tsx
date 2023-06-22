import { Task } from '../models/tasks.model';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>{task.name}</li>
      ))}
    </ul>
  );
};

export default TaskList;
