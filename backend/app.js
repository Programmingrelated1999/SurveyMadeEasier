const express = require("express");
const app = express();
const formsRouter = require("./controllers/formsRouter");
const cors = require("cors");

//cross origin
app.use(cors());

//transform all incoming request body into javascript object
app.use(express.json());

//formsRouter root as /api/forms
app.use("/api/forms", formsRouter);

module.exports = app;
