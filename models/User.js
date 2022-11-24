const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

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
  },
});

UserScheema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", UserScheema);
