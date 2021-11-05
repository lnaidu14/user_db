const express = require("express");
const app = express();
const port = 3000;

const { createDocument } = require("./business/createDocument");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/", (req, res) => {
  const body = req.body;
  try {
    const response = createDocument(body);
    res.status(200).send(response.message);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
