// Create web server with Express
// Create a route for GET /comments
// Return the comments array as JSON
// Start the server on port 3000

const express = require('express');
const app = express();

const comments = [
  { username: 'Tammy', comment: 'lololol' },
  { username: 'FishBoi', comment: 'I am a fish' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000);
