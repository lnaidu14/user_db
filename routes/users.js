const router = require("express").Router();
const {
  createUser,
  fetchUser,
  deleteUser,
  updateUser,
} = require("../business/index");

// Handling routes
// Test endpoint
router.get("", (req, res) => {
  res.send("Hello, welcome to the user server!");
});

// GET specific user
router.get("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const response = await fetchUser(id);
    res.status(response.status).send(response.document);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

// POST user
router.post("", async (req, res) => {
  const body = req.body;
  try {
    const response = await createUser(body);
    res.status(response.status).send(response.message);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

// Deleting users
router.delete("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const response = await deleteUser(id);
    res.status(response.status).send(response.message);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

// Updating users
router.put("/:userId", async (req, res) => {
  try {
    const id = req.params.userId;
    const body = req.body;
    const response = await updateUser(id, body);
    res.status(response.status).send(response.message);
  } catch (err) {
    res.status(err.status).send(err.message);
  }
});

module.exports = router;
