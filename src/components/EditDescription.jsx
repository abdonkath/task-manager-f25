import { useState } from "react";

function EditDescription({ index, description, onEdit, onCancel }) {
   const [descriptionField, setDescriptionField] = useState(description);

   const handleSubmit = (e) => {
      e.preventDefault();
      onEdit(index, descriptionField);
   };

   const handleCancel = (e) => {
      if (e.key === "Escape") {
         onCancel();
      }
   };

   return (
      <form onSubmit={handleSubmit}>
         <input
            id={`edit-description-${index}`}
            placeholder="Enter description"
            value={descriptionField}
            onChange={(e) => setDescriptionField(e.target.value)}
            onKeyDown={handleCancel}
         />
      </form>
   );
}
export default EditDescription;
