const express = require("express");

const { protect } = require("../middleware/auth");

const router = express.Router();
const {
  getColumn,
  createColumn,
  updateColumn,
  deleteColumn,
} = require("../controllers/columns");

router.route("/").get(protect, getColumn).post(protect, createColumn);
router.route("/:id").put(protect, updateColumn).delete(protect, deleteColumn);

module.exports = router;
