import Task from "./Task";
import { useTaskContext } from "./TaskContext";

function TaskList() {
   const { tasks } = useTaskContext();
   return (
      <div>
         {tasks.length > 0 ? (
            tasks.map((task, index) => (
               <Task key={index} {...task} index={index} />
            ))
         ) : (
            <p>No tasks to display!</p>
         )}

         {tasks.length > 0 && (
            <p>There are {tasks.length} tasks in the list. </p>
         )}
      </div>
   );
}
export default TaskList;
