const express = require("express");
const {
  getCards,
  createColumn,
  updateColumn,
  deleteColumn,
} = require("../controllers/columns");

const router = express.Router();

router.route("/").get(getCards).post(createColumn);

router.route("/:id").put(updateColumn).delete(deleteColumn);

module.exports = router;
