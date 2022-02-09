var express = require("express");
var router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const secret = process.env.JWT_TOKEN;

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });

  try {
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error registering new user" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: "Incorrect email or password" });
    } else {
      user.isCorrectPassword(password, function (error, same) {
        if (!same) {
          res.status(401).json({ error: "Incorrect email or password" });
        } else {
          const token = jwt.sign({ email }, secret, { expiresIn: "10d" });
          res.json({ user: user, token: token });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal error, try again" });
  }
});

router.put("/:id", async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findByIdAndUpdate(
      id,
      { $set: { name: name, email: email } },
      { $upsert: true, new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Problem to update the user" });
  }
});

router.put("/password/:id", async (req, res) => {
  const { password } = req.body;
  const { id } = req.params;

  try {
    let user = await User.findByIdAndUpdate(
      id,
      { $set: { password: password } },
      { $upsert: true, new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Problem to update the password" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    let user = await User.findById(id);

    await user.delete();
    res.json({ message: "User deleted" }).status(204);
  } catch (error) {
    res.status(500).json({ error: "Problem to delete the user" });
  }
});

module.exports = router;
