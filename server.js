const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./modules/productModules");

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the health care application." });
});
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
  } catch {
    console.log("Error");
    res.status(500).json({ message: "error message" });
  }
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
