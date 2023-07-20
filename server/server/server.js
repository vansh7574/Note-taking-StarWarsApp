import express, { json } from 'express';
require('dotenv').config({ path: 'config/.env' });
import cors from 'cors';

// DB connection
import './config/dbConnection';
import noteRoute from './routes/note.route';

const server = express();

(async () => {
	// Initialize Express Server Functionality
	// Parse Req.body
	server.use(json());
	// CORS
	server.use(cors({ origin: true, credentials: true }));

	// Environments
	const PORT = process.env.PORT || 5000;
	const HOST = process.env.HOST || 'localhost';
	const BASE_API_URL = `http://${HOST}:${PORT}${'/api/v1'}`;

	server.listen(PORT, () => {
		console.info('API Running at');
		console.info(`${'\tLocalhost:'} ${BASE_API_URL}`);
		console.info(`${'\tNotes:'} ${`${BASE_API_URL}/notes`}`);
	});

	// Initialize Express Routes
	server.use('/api/v1/notes', noteRoute);
})();

server.get('/api/v1', (req, res) => {
	res.json({ success: true, message: process.env.PROJECT_NAME.toUpperCase() });
});
