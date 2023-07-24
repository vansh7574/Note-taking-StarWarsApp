import express from 'express';

import noteController from '../controllers/note.controller';
{/* This file simply defines all the routes and a call back function to be passed in whenever a request hits a specific route */ }
export default express
	.Router()
	.post('/', noteController.createNote)
	.get('/', noteController.getAllNotes)
	.get('/:noteId', noteController.getNoteById)
	.put('/:noteId', noteController.updateNoteById)
	.delete('/:noteId', noteController.deleteNoteById)
