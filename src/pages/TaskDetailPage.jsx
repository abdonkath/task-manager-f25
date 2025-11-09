import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function TaskDetailPage() {
   const { id } = useParams();
   const [task, setTask] = useState(null);
   useEffect(() => {
      getTask();
   }, []);
   async function getTask() {
      try {
         const response = await axios.get(
            `https://68ebf9e7eff9ad3b14010278.mockapi.io/api/tasks/${id}`
         );
         const { data } = response;
         setTask(data);
      } catch (error) {
         console.error(error);
         setTask(null);
      }
   }

   if (!task) return null;
   return (
      <div>
         <h1>Task Detail</h1>
         <p>Description: {task.description}</p>
         <p>Completed: {task.completed ? "Yes" : "No"}</p>
      </div>
   );
}

export default TaskDetailPage;
