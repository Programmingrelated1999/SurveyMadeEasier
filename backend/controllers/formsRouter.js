const formsRouter = require("express").Router();
const Forms = require("../models/forms");

//GET ALL
formsRouter.get("/", (request, response) => {
  Forms.find({})
    .populate("questions", { name: 1, type: 1 })
    .then((forms) => {
      response.json(forms);
    });
});

//GET SPECIFIC ID
formsRouter.get("/:id", async (request, response) => {
  //first have to convert to Number because request.params.id is a string and the id from forms is an integer. Comparing them with === results in false due to type differences.
  const id = request.params.id;
  const form = await Forms.findById(id).populate("questions", {
    name: 1,
    type: 1,
  });
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

//vote
formsRouter.post("/:id/vote", async (request, response) => {
  const id = request.params.id;
  const form = await Forms.findById(id);
  form.votes = form.votes + 1;
  const savedForm = await form.save();
  response.json(savedForm);
});

//UPDATE
//create a new form from request.body. Goes through every forms and if the id matches update the form.
formsRouter.put("/:id", async (request, response) => {
  const id = request.params.id;
  const form = await Forms.findById(id);
  console.log("Form");
  console.log(form);
  form.name = request.body.name;
  form.description = request.body.description;
  const savedForm = await form.save();
  response.json(savedForm);
});

//DELETE
//filter out the id with same id from request.params.id and set it to forms
formsRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const removedForm = await Forms.findByIdAndRemove(id);
  response.json(removedForm);
});

//export modules
module.exports = formsRouter;
