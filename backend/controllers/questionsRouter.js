const questionsRouter = require("express").Router();
const Forms = require("../models/forms");
const Questions = require("../models/question");

//GET ALL
questionsRouter.get("/", (request, response) => {
  Questions.find({}).then((questions) => {
    response.json(questions);
  });
});

//GET SPECIFIC ID
questionsRouter.get("/:id", async (request, response) => {
  //first have to convert to Number because request.params.id is a string and the id from questions is an integer. Comparing them with === results in false due to type differences.
  const id = request.params.id;
  const question = await Questions.findById(id);
  if (question) {
    response.json(question);
  } else {
    response.status(404).end();
  }
});

//POST method
//the request will contain name, type and formId
//find form based on id and set it to form variable. Then create question from Question Model and save the question.
//set form.questions to form.questions array appended by the question.id Then save the form.
questionsRouter.post("/", async (request, response) => {
  const form = await Forms.findById(request.body.formId);
  const question = new Questions({
    name: request.body.name,
    type: request.body.type,
    form: form._id,
  });
  const savedQuestion = await question.save();
  form.questions = form.questions.concat(savedQuestion._id);
  await form.save();

  response.json(savedQuestion);
});

//UPDATE
//create a new question from request.body. Goes through every questions and if the id matches update the question.
questionsRouter.put("/:id", async (request, response) => {
  const id = request.params.id;
  const newQuestion = {
    name: request.body.name,
    type: request.body.type,
  };
  const updatedQuestion = await Questions.findByIdAndUpdate(id, newQuestion);
  response.json(updatedQuestion);
});

//DELETE
//filter out the id with same id from request.params.id and set it to questions
questionsRouter.delete("/:id", async (request, response) => {
  const id = request.params.id;
  const removedQuestion = await Questions.findByIdAndRemove(id);
  response.json(removedQuestion);
});

//export modules
module.exports = questionsRouter;
