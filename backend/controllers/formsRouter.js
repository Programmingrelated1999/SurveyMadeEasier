const formsRouter = require("express").Router();
const forms = require("../utils/formsTestObject");

formsRouter.get("/", (request, response) => {
  response.status(200).json(forms);
});

formsRouter.get("/:id", (request, response) => {
  //first have to convert to Number because request.params.id is a string and the id from forms is an integer. Comparing them with === results in false due to type differences.
  const id = Number(request.params.id);
  const form = forms.find((form) => form.id === id);

  if (form) {
    response.json(form);
  } else {
    response.status(404).end();
  }
});

module.exports = formsRouter;
