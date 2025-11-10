import { useEffect } from "react";
import { TaskForm, TaskList, TaskContext } from "../components";
import axios from "axios";
import { tasksSlice } from "../redux/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { Stack } from "@mui/material";

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
      <div
         style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            width: "50%",
            backgroundColor: "#fff",
            margin: "40px auto",
            fontSize: "1.4rem",
         }}
      >
         <Stack justifyContent="center" alignItems="center" minHeight="100vh">
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
         </Stack>
      </div>
   );
}

export default TasksPage;
