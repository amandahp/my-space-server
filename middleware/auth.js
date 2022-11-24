const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

// Protect routes

exports.protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    [, token] = req.headers.authorization.split(" ");
  }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }

  try {
    const dedoced = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(dedoced.id);
    next();
  } catch (err) {
    return next(new ErrorResponse("Not authorize to access this route", 401));
  }
};
