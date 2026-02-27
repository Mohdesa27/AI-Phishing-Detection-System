const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/emailDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("backend running successfully");
});

const emailRoutes = require("./routes/emailRoutes");
app.use("/api/email", emailRoutes);

app.listen(5000, () =>{
  console.log("Server running on port 5000");
});