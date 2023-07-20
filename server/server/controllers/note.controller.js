import Note from '../models/note';

const getAllNotes = async (req, res) => {
	try {
		const notes = await Note.find({
			isDeleted: false
		});

		res.status(200).send({
			success: true,
			data: notes,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

const getNoteById = async (req, res) => {
	try {
		const { noteId } = req.params;
		const note = await Note.findById(noteId);

		res.status(200).send({
			success: true,
			data: note,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

const updateNoteById = async (req, res) => {
	try {
		const { noteId } = req.params;
		const { description } = req.body;
		const note = await Note.findOneAndUpdate(
			{
				_id: noteId,
			},
			{ description },
			{
				new: true,
			},
		);
		res.status(200).send({
			success: true,
			data: note,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

const deleteNoteById = async (req, res) => {
	try {
		const { noteId } = req.params;
		const note = await Note.findOneAndUpdate(
			{
				_id: noteId,
			},
			{ isDeleted: true },
			{
				new: true,
			},
		);
		res.status(200).send({
			success: true,
			data: note,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

const createNote = async (req, res) => {
	try {
		const note = new Note(req.body);
		const saveNote = await note.save();
		res.status(200).send({
			success: true,
			data: saveNote,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

export default { createNote, getAllNotes, getNoteById, updateNoteById, deleteNoteById };
