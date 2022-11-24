const express = require("express");

const router = express.Router();
const { createCard, updateCard, deleteCard } = require("../controllers/cards");

router.route("/").post(createCard);
router.route("/:id").put(updateCard).delete(deleteCard);

module.exports = router;
