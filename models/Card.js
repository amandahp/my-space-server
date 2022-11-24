const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: [70, "Title can not be more than 70 characters"],
  },
  content: String,
  order: {
    type: Number,
    required: [true, "Please add a order"],
  },
  userId: {
    type: Number,
    required: [true, "Please add a userId"],
  },
  columnId: {
    type: Number,
    required: [true, "Please add a columnId"],
  },
});

module.exports = mongoose.model("Card", CardSchema);
