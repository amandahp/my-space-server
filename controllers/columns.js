/* eslint-disable consistent-return */
const Column = require("../models/Column");

// @desc    Get all columns
// @route   GET /api/v1/columns
// @access  Private
exports.getColumn = async (req, res, next) => {
  try {
    const columns = await Column.find();
    res
      .status(200)
      .json({ success: true, count: columns.length, data: columns });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new column
// @route   POST /api/v1/columns
// @access  Private
exports.createColumn = async (req, res, next) => {
  try {
    const column = await Column.create(req.body);

    res.status(201).json({ success: true, data: column });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update a column
// @route   PUT /api/v1/columns/:id
// @access  Private
exports.updateColumn = async (req, res, next) => {
  try {
    const column = await Column.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!column) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ sucess: true, data: column });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update a column
// @route   DELETE /api/v1/columns/:id
// @access  Private
exports.deleteColumn = async (req, res, next) => {
  try {
    const column = await Column.findByIdAndDelete(req.params.id);

    if (!column) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ sucess: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
