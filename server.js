/* eslint-disable no-console */
const express = require("express");
const dotenv = require("dotenv");
// eslint-disable-next-line no-unused-vars
const colors = require("colors");

const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");
const logger = require("./middleware/logger");

// Load Env
dotenv.config({ path: "./config/config.env" });

// Connect to Db
connectDB();

// Routes
const columns = require("./routes/columns");
const cards = require("./routes/cards");
const auth = require("./routes/auth");

const app = express();

// Body parser
app.use(express.json());

// Logger
app.use(logger);

// Routes
app.use("/api/v1/columns", columns);
app.use("/api/v1/cards", cards);
app.use("/api/v1/auth", auth);

app.use(errorHandler);

const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(1));
});
