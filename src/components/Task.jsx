import { useContext, useState } from "react";
import { TaskContext } from "./TaskContext";
import EditDescription from "./EditDescription";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Task({ description = "", completed = false, index }) {
   const [editing, setEditing] = useState(false);
   const { deleteTask, updateCompleted, updateDescription } =
      useContext(TaskContext);
   const handleEdit = (index, description) => {
      updateDescription(index, description);
      setEditing(false);
   };

   const handleCancelEdit = () => {
      setEditing(false);
   };

   const handleDelete = () => {
      deleteTask(index);
      setEditing(false);
   };

   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",
            padding: "2px",
            gap: "10px",
         }}
      >
         <input
            type="checkbox"
            checked={completed}
            onChange={(e) => {
               updateCompleted(index, e.target.checked);
            }}
         />
         {editing ? (
            <EditDescription
               index={index}
               description={description}
               onEdit={handleEdit}
               onCancel={handleCancelEdit}
            />
         ) : (
            <span
               style={{
                  textDecoration: completed ? "line-through" : "none",
               }}
            >
               {description}
            </span>
         )}

         <Button
            onClick={() => setEditing(true)}
            variant="outlined"
            size="small"
            sx={{
               color: "#641a92ff",
               borderColor: "#ac84e0ff",
               textTransform: "none",
               borderRadius: "0.5rem",
               fontWeight: 500,
               ":hover": { backgroundColor: "#f3e5f5" },
            }}
         >
            Edit
         </Button>

         <Button
            onClick={handleDelete}
            variant="contained"
            size="small"
            sx={{
               backgroundColor: "#f7a4a4ff",
               textTransform: "none",
               borderRadius: "0.5rem",
               fontWeight: 500,
               ":hover": { backgroundColor: "#ec7171ff" },
            }}
         >
            Delete
         </Button>

         <Button
            component={Link}
            to={`/tasks/${index + 1}`}
            variant="contained"
            size="small"
            sx={{
               color: "#ffffffff",
               borderColor: "#ffffffff",
               textTransform: "none",
               borderRadius: "0.5rem",
               fontWeight: 500,
               ":hover": { backgroundColor: "#f3e5f5" },
            }}
         >
            View
         </Button>
      </div>
   );
}

export default Task;
