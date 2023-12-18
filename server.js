const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the health care application." });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

mongoose
  .connect(
    "mongodb+srv://owusujoyansah:123456admin@cluster0.5dv0gxc.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed!");
  });
