const formsRouter = require("express").Router();
const { request } = require("http");
let forms = require("../utils/formsTestObject");

//GET ALL
formsRouter.get("/", (request, response) => {
  response.status(200).json(forms);
});

//GET SPECIFIC ID
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

//POST method
formsRouter.post("/", (request, response) => {
  const id = Number((Math.random() * 1000000).toFixed(0));
  const form = {
    name: request.body.name,
    description: request.body.description,
    questions: request.body.questions,
    id: id,
  };

  if (form) {
    response.json(form);
    forms = forms.concat(form);
  } else {
    response.status(404).end();
  }
});

module.exports = formsRouter;
