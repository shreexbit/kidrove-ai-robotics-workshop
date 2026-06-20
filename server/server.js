const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working");
});

app.get("/api/enquiry", (req, res) => {
  res.json({
    success: true,
    message: "API working",
  });
});

app.post("/api/enquiry", (req, res) => {
  console.log("Received:", req.body);

  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  res.status(200).json({
    success: true,
    message: "Registration submitted successfully",
  });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});