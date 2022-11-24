const mongoose = require("mongoose");

const { Schema } = mongoose;

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
  column: {
    type: Schema.Types.ObjectId,
    ref: "Column",
    required: [true, "Please add column id"],
  },
});

module.exports = mongoose.model("Card", CardSchema);
