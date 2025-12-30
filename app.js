const express = require("express");
const path = require("path");

const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/api/product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "products.html"));
});


app.post("/api/product", (req, res) => {
  const productName = req.body.productName;

  console.log("Product received:", productName);

  res.send(`Product added: ${productName}`);
});


app.listen(port, () => {
  console.log("Server is running on port 3000");
});
