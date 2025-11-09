import { useEffect } from "react";
import { TaskForm, TaskList, TaskContext } from "../components";
import axios from "axios";
import { tasksSlice } from "../redux/tasksSlice";
import { useDispatch, useSelector } from "react-redux";

function TasksPage() {
   // const [taskList, dispatch] = useReducer(tasksReducer, []);
   const taskList = useSelector((state) => state.tasks);
   const dispatch = useDispatch();
   const actions = tasksSlice.actions;

   useEffect(() => {
      getTasks();
   }, []);
   async function getTasks() {
      try {
         const response = await axios.get(
            "https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks"
         );

         const { data } = response;

         dispatch(actions.setTasks(data));
      } catch (error) {
         console.error("Something went wrong", error);

         dispatch(actions.setTasks([]));
      }
   }

   function deleteTask(index) {
      dispatch(actions.deleteTask(index));
   }

   function addTask(description) {
      dispatch(actions.addTask(description));
   }

   function updateTaskField(index, field, value) {
      dispatch(actions.updateTask({ index, field, value }));
   }

   function updateCompleted(index, completed) {
      updateTaskField(index, "completed", completed);
   }

   function updateDescription(index, description) {
      updateTaskField(index, "description", description);
   }

   return (
      <TaskContext
         value={{
            tasks: taskList,
            addTask,
            deleteTask,
            updateCompleted,
            updateDescription,
         }}
      >
         <TaskForm />
         <TaskList />
      </TaskContext>
   );
}

export default TasksPage;
