
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
// import query from './db.js';
import './ws.js'

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the port for the server
const port = process.env.PORT || 5001
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from 'dist'

// Handle client-side routing, returning all requests to the app
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html')); // Send index.html for client-side routing
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});