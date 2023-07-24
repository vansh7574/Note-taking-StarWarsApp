import { Schema, model } from 'mongoose';
{/* This file simply defines a model which specifies the type of object that will get stored in the MongoDB DataBase */ }
const noteSchema = new Schema(
	{
		description: { type: String },
		isDeleted: { type: Boolean, default: false, index: true },
	},
	{ timestamps: true, versionKey: false },
);

const Note = new model('Note', noteSchema);

export default Note;
