const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserScheema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please add a full name"],
  },
  email: {
    type: String,
    match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/],
    required: [true, "Please add an email"],
    unique: true,
  },
  password: {
    type: String,
    match: [/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/],
    required: [true, "Please add a password"],
    select: false,
  },
});

// Encrypt password
UserScheema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Sign JWT and return
UserScheema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Match user enterd password to hashed password in database
UserScheema.methods.matchPassword = async function (enteredPassword) {
  const match = await bcrypt.compare(enteredPassword, this.password);
  return match;
};

module.exports = mongoose.model("User", UserScheema);
