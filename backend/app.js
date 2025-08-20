G7LmQWm7dJr87f8jgE5BVe// app.js

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from SwiftStay backend 🚀" });
});

// Serve frontend if it exists
const frontendPath = path.join(__dirname, "frontend");
app.use(express.static(frontendPath));

// Fallback: if no API route matches, serve index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"), (err) => {
    if (err) {
      res.status(404).send("Frontend not found. Build it first.");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});


const express = require("express");
const path = require("path");
const app = express();

// Serve static frontend files
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
