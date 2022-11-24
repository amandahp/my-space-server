const express = require("express");

const router = express.Router();
const { protect } = require("../middleware/auth");
const { createCard, updateCard, deleteCard } = require("../controllers/cards");

router.route("/").post(protect, createCard);
router.route("/:id").put(protect, updateCard).delete(protect, deleteCard);

module.exports = router;
