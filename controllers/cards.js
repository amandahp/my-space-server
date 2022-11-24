/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const Card = require("../models/Card");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Create new card
// @route   POST /api/v1/cards
// @access  Private
exports.createCard = async (req, res, next) => {
  try {
    const { title, content, order, userId, columnId } = req.body;

    if (!title || !order || !userId || !columnId) {
      return next(
        new ErrorResponse(
          `Title, order, userId and columnId are required fields`,
          422
        )
      );
    }

    const card = await Card.create(req.body);
    res.status(201).json({ success: true, data: card });
  } catch (err) {
    next(err);
  }
};

// @desc    Update a card
// @route   PUT /api/v1/cards/:id
// @access  Private
exports.updateCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!card) {
      return next(
        new ErrorResponse(`Card not found with id of ${req.body.id}`, 422)
      );
    }

    res.status(200).json({ sucess: true, data: card });
  } catch (err) {
    next(err);
  }
};

// @desc    Update card
// @route   DELETE /api/v1/cards/:id
// @access  Private
exports.deleteCard = async (req, res, next) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);

    if (!card) {
      return next(
        new ErrorResponse(`Card not found with id of ${req.body.id}`, 422)
      );
    }

    res.status(200).json({ sucess: true, data: {} });
  } catch (err) {
    next(err);
  }
};
