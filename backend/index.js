const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Backend is running."));

app.listen(PORT, () => console.log(`Express server running on Port ${PORT}`));

app.use(cors());