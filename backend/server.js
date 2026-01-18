const express = require("express");
const cors = require("cors"); //Cross Origin Resource Sharing

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/students", require("./routes/studentRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server started on port 5000");
});