// @desc    Get all cards
// @route   GET /api/v1/columns
// @access  Private
exports.getCards = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all cards" });
};

// @desc    Create new column
// @route   POST /api/v1/columns
// @access  Private
exports.createColumn = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new column" });
};

// @desc    Update a column
// @route   PUT /api/v1/columns/:id
// @access  Private
exports.updateColumn = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update column ${req.params.id}` });
};

// @desc    Update a column
// @route   DELETE /api/v1/columns/:id
// @access  Private
exports.deleteColumn = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete column ${req.params.id}` });
};
