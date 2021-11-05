const express = require("express");
const app = express();
const port = 3000;

const { createUser, fetchUser } = require("./business/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api", (req, res) => {
  res.send("Hello, world!");
});

app.get("/api/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const fetchedDocument = await fetchUser(id);
    res.status(200).send(fetchedDocument);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

app.post("/api", async (req, res) => {
  const body = req.body;
  try {
    const response = createUser(body);
    res.status(200).send(response.message);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
