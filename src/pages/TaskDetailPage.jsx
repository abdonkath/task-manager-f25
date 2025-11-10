import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { Stack } from "@mui/material";

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
         <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{
               backgroundColor: "#fcf8fbff",
               minHeight: "100vh",
               margin: 0,
               padding: 0,
            }}
         >
            <div>
               <h1>
                  <ListAltIcon
                     sx={{
                        marginRight: "1rem",
                     }}
                  />
                  Task Detail
               </h1>
               <p>Description: {task.description}</p>
               <p>Completed: {task.completed ? "Yes" : "No"}</p>
            </div>
         </Stack>
      </div>
   );
}

export default TaskDetailPage;
