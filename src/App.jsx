import { useEffect, useReducer } from "react";
import "./App.css";
import { TaskForm, TaskList, TaskContext, tasksReducer } from "./components";
import axios from "axios";

function App() {
   // This creates a state to track our list of tasks
   // Initalized to an empty array because we'll populate it with our API.
   // const [taskList, setTaskList] = useState([]);
   const [taskList, dispatch] = useReducer(tasksReducer, []);

   useEffect(() => {
      // logic to run on component mount
      getTasks();
   }, []); // Empty dependency array = run on component mount only

   // async means our function will run asynchronously
   async function getTasks() {
      try {
         // await means JS will wait for this to finish before moving on
         const response = await axios.get(
            "https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks"
         );

         // destruct data from response
         // same as response.data
         const { data } = response;

         //setTaskList(data)
         dispatch({
            type: "set_tasks",
            tasks: data,
         });
      } catch (error) {
         console.error("Something went wrong", error);

         //setTaskList([])
         dispatch({
            type: "set_tasks",
            tasks: [],
         });
      }
   }

   // deleteTask takes an index and removes the task at that index
   function deleteTask(index) {
      dispatch({
         type: "delete_task",
         index: index,
      });
   }

   // addTask adds a task to our array with the description
   function addTask(description) {
      dispatch({
         type: "add_task",
         description: description,
      });
   }

   function updateTaskField(index, field, value) {
      dispatch({
         type: "update_task",
         index,
         field,
         value,
      });
   }

   // updateCompleted updates the completed field of our task
   function updateCompleted(index, completed) {
      updateTaskField(index, "completed", completed);
   }

   // updateDescription updates the description field of our task
   function updateDescription(index, description) {
      updateTaskField(index, "description", description);
   }

   // This is the render function: what visually shows in the UI
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

export default App;
