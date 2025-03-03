const express = require("express");
const User = require("../models/User");
const adminMiddleware = require("../middleware/adminMiddleware");

const router = express.Router();

router.get("/users", adminMiddleware, async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});

router.delete("/user/:id", adminMiddleware, async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

router.put("/user/:id/promote", adminMiddleware, async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { role: "admin" }, { new: true });
  res.json(user);
});

module.exports = router;
