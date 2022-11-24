const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// @desc    Register user
// @route   POST /api/v1/auth
// @access  Public
exports.register = async (req, res, next) => {
  try {
    const { fullName, email, password } = req.body;

    // Create user
    const user = await User.create({
      fullName,
      email,
      password,
    });

    return res.send(201).json({ sucess: true });
  } catch (err) {
    next(err);
  }
};
