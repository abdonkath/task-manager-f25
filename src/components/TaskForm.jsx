import { Button } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTaskContext } from "./TaskContext";

function TaskForm() {
   const [description, setDescription] = useState("");

   const { addTask } = useTaskContext();

   const inputRef = useRef(null);

   useEffect(() => {
      inputRef?.current?.focus();
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!description.trim()) {
         alert("Enter a task description before adding.");
         return;
      }
      addTask(description);

      setDescription("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="description">Description: </label>
         <input
            type="text"
            id="description"
            name="description"
            value={description}
            ref={inputRef}
            onChange={(e) => {
               setDescription(e.target.value);
            }}
            style={{
               width: "15rem",
               height: "2.5rem",
            }}
         />

         <Button
            type="submit"
            variant="contained"
            sx={{
               marginLeft: "1rem",
               backgroundColor: "#b38ae5",
               textTransform: "none",
               borderRadius: "0.5rem",
               fontWeight: 500,
               ":hover": { backgroundColor: "#9e5bf0ff" },
            }}
         >
            Add Task
         </Button>
      </form>
   );
}
export default TaskForm;
