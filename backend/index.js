// Import necessary modules
const express = require("express");
const cors = require("cors");

// Initialize Express application
const app = express();

// Define the port the server will listen on
const PORT = process.env.PORT || 3000;

// Setup Cors middleware
app.use(cors());

// GET route to check if backend is running correctly
app.get("/", (req, res) => res.send("Backend is running."));

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server running on Port ${PORT}`);
});