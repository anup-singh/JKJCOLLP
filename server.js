const express = require('express');
const path = require('path');
const app = express();
const port = 4500;

// Set the directory for static files
const staticPath = path.join(__dirname, 'public');

// --- Key Step: Use express.static middleware ---
// This serves all files in the 'public' folder.
// Express automatically looks for 'index.html' inside the
// static directory when the user requests the root URL ('/').
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(staticPath, 'home.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
  console.log(`Serving files from: ${staticPath}`);
});