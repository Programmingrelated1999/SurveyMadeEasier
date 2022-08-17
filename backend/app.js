//MODULES
//express app setup
const express = require("express");
const app = express();
//routers import
const formsRouter = require("./controllers/formsRouter");
const questionsRouter = require("./controllers/questionsRouter");
//cross-origin resource sharing import
const cors = require("cors");
//utils
const config = require("./utils/config");
const logger = require("./utils/logger");
//mongoose
const mongoose = require("mongoose");

//connect to database
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

//cross origin
app.use(cors());

//transform all incoming request body into javascript object
app.use(express.json());

//formsRouter root as /api/forms
app.use("/api/forms", formsRouter);

//questionsRouter root as /api/questions
app.use("/api/questions", questionsRouter);

//exports
module.exports = app;
