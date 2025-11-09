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

      addTask(description);

      setDescription("");
   };

   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="description">Description</label>
         <input
            type="text"
            id="description"
            name="description"
            value={description}
            ref={inputRef}
            onChange={(e) => {
               setDescription(e.target.value);
            }}
         />
         <button type="submit">Add Task</button>
      </form>
   );
}
export default TaskForm;
