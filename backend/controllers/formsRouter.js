const formsRouter = require("express").Router();

formsRouter.get("/", (request, response) => {
  response.status(201).json({ message: "hello" });
});

module.exports = formsRouter;
