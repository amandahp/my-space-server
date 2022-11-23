const express = require("express");

const router = express.Router();
const {
  getColumn,
  createColumn,
  updateColumn,
  deleteColumn,
} = require("../controllers/columns");

router.route("/").get(getColumn).post(createColumn);
router.route("/:id").put(updateColumn).delete(deleteColumn);

module.exports = router;
