import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
	{
		description: { type: String },
		isDeleted: { type: Boolean, default: false, index: true },
	},
	{ timestamps: true, versionKey: false },
);

const Note = new model('Note', noteSchema);

export default Note;
