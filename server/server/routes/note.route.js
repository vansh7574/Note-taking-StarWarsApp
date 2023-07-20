import express from 'express';

import noteController from '../controllers/note.controller';

export default express
	.Router()
	.post('/', noteController.createNote)
	.get('/', noteController.getAllNotes)
	.get('/:noteId', noteController.getNoteById)
	.put('/:noteId', noteController.updateNoteById)
	.delete('/:noteId', noteController.deleteNoteById)
