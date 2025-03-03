const express = require("express");
const authenticate = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/query", authenticate, (req, res) => {
  res.json({ response: "AI Response Placeholder" });
});

module.exports = router;
