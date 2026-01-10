const express = require("express");
const app = express();
const port = 3000;

app.post("/api/auth/signup", (req, res) => {
  res.send("Hello world !");
});

app.post("/api/auth/login", (req, res) => {
  res.send("Hello world !");
});

app.get("/api/books", (req, res) => {
  res.send("Hello world !");
});

app.get("/api/books/:id", (req, res) => {
  res.send("Hello world !");
});

app.get("/api/books/bestrating", (req, res) => {
  res.send("Hello world !");
});

app.post("/api/books", (req, res) => {
  res.send("Hello world !");
});

app.put("/api/books/:id", (req, res) => {
  res.send("Hello world !");
});

app.delete("/api/books/:id", (req, res) => {
  res.send("Hello world !");
});

app.post("/api/books/:id/rating", (req, res) => {
  res.send("Hello world !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
