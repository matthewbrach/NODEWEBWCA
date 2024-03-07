const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000; // Azure will set process.env.PORT

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Send index.html file as a response to all get requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
