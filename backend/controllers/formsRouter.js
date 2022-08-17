const formsRouter = require("express").Router();
const Forms = require("../models/forms");
const Question = require("../models/question");

//import data from utils forms and set it to forms
let forms = require("../utils/formsTestObject");

//GET ALL
formsRouter.get("/", (request, response) => {
  Forms.find({}).then((forms) => {
    response.json(forms);
  });
});

//GET SPECIFIC ID
formsRouter.get("/:id", async (request, response) => {
  //first have to convert to Number because request.params.id is a string and the id from forms is an integer. Comparing them with === results in false due to type differences.
  const id = request.params.id;
  const form = await Forms.findById(id);
  console.log(form);
  if (form) {
    response.json(form);
  } else {
    response.status(404).end();
  }
});

//POST method
formsRouter.post("/", (request, response) => {
  const form = new Forms({
    name: request.body.name,
    description: request.body.description,
  });
  form.save().then((form) => {
    response.json(form);
  });
});

//UPDATE
//create a new form from request.body. Goes through every forms and if the id matches update the form.
formsRouter.put("/:id", (request, response) => {
  const id = Number(request.params.id);
  const updatedForm = {
    name: request.body.name,
    description: request.body.description,
    questions: request.body.questions,
    id: id,
  };
  forms = forms.map((form) => (form.id === id ? updatedForm : form));
  if (forms) {
    response.json(forms);
  } else {
    response.status(404).end();
  }
});

//DELETE
//filter out the id with same id from request.params.id and set it to forms
formsRouter.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  forms = forms.filter((element) => element.id !== id);
  if (forms) {
    response.json(forms);
  } else {
    response.status(404).end();
  }
});

//export modules
module.exports = formsRouter;
