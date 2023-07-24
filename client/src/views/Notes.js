import React, { useEffect, useState } from "react";

import ListNote from "../components/Notes/ListNote";
import AddEditNote from "../components/Notes/AddEditNote";

import {
  addNewNote,
  deleteNoteById,
  editNote,
  getNoteById,
  getNotes,
} from "../services/notes.service";

{/* This component renders the entire view of adding, editing, deleting and viewing all notes  */}
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentMode, setCurrentMode] = useState(null);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleChangeMode = (mode, id) => {
    if (mode === "EDIT") {
      handleGetNoteById(id);
    } else if (mode === null) {
      setCurrentNote({});
    }
    setCurrentMode(mode);
  };

  const getAllNotes = async () => {
    const { data } = await getNotes();
    setNotes(data);
  };

  const handleGetNoteById = async (id) => {
    const { data } = await getNoteById(id);
    setCurrentNote(data);
  };

  const handleAddNote = async (description) => {
    console.log("description", description);
    const status = await addNewNote(description);
    if (status === 200) {
      handleChangeMode(null);
      setCurrentNote({});
      await getAllNotes();
    }
  };

  const handleEditNote = async ({ description, isDeleted, id }) => {
    const status = await editNote({ description, isDeleted, id });
    if (status === 200) {
      handleChangeMode(null);
      setCurrentNote({});
      await getAllNotes();
    }
  };

  const handleDeleteNoteById = async (id) => {
    const status = await deleteNoteById(id);
    if (status === 200) {
      await getAllNotes();
    }
  };

  return (
    <>
      <ListNote
        data={notes}
        handleChangeMode={handleChangeMode}
        handleGetNoteById={handleGetNoteById}
        handleDeleteNoteById={handleDeleteNoteById}
      />
      <AddEditNote
        currentMode={currentMode}
        currentNote={currentNote}
        handleChangeMode={handleChangeMode}
        handleAddNote={handleAddNote}
        handleEditNote={handleEditNote}
      />
    </>
  );
};

export default Notes;
