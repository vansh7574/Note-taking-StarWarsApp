import React, { useCallback, useState } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

{/* This component renders a dialog box so that a user can add or edit his notes */ }
const AddEditNote = ({
  currentMode,
  currentNote,
  handleChangeMode,
  handleAddNote,
  handleEditNote,
}) => {
  const isEditMode = currentMode === "EDIT";
  const isAddMode = currentMode === "ADD";
  const [description, setDescription] = useState("");

  const handleSubmit = useCallback(() => {
    if (isAddMode) handleAddNote(description);
    else if (isEditMode) handleEditNote({ description, id: currentNote._id });
  }, [
    currentNote._id,
    description,
    handleAddNote,
    handleEditNote,
    isAddMode,
    isEditMode,
  ]);
  
  return (
    <Dialog
      open={isEditMode || isAddMode}
      onClose={() => handleChangeMode(null)}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle>{isAddMode ? "Add" : "Edit"} Note</DialogTitle>
      <DialogContent dividers>
        <TextField
          autoFocus
          label="Note Description"
          placeholder="Type Notes..."
          fullWidth
          multiline
          rows={4}
          InputLabelProps={{
            shrink: currentNote.description,
          }}
          defaultValue={currentNote.description}
          variant="filled"
          onChange={(event) => setDescription(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleChangeMode(null)}>Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEditNote;
