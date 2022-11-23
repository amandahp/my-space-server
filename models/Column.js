const mongoose = require("mongoose");

const ColumnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    maxlength: [50, "Title can not be more than 50 characters"],
  },
  order: {
    type: Number,
    required: [true, "Please add a order"],
  },
  userId: {
    type: Number,
    required: [true, "Please add a userId"],
  },
});

module.exports = mongoose.model("Column", ColumnSchema);
