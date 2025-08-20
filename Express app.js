const path = require('path');

// Serve static frontend build
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

const path = require('path');

// Serve static frontend build
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});
