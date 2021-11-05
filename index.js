const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware for handling routes
app.use("/api/users", require("./routes/users"));

// Port
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
