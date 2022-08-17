const questionsRouter = require("express").Router();
const Forms = require("../models/forms");
const Questions = require("../models/question");

//import data from utils questions and set it to questions
let questions = require("../utils/formsTestObject");

//GET ALL
questionsRouter.get("/", (request, response) => {
  Questions.find({}).then((questions) => {
    response.json(questions);
  });
});

//GET SPECIFIC ID
questionsRouter.get("/:id", (request, response) => {
  //first have to convert to Number because request.params.id is a string and the id from questions is an integer. Comparing them with === results in false due to type differences.
  const id = Number(request.params.id);
  const question = questions.find((question) => question.id === id);
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
questionsRouter.put("/:id", (request, response) => {
  const id = Number(request.params.id);
  const updatedForm = {
    name: request.body.name,
    description: request.body.description,
    questions: request.body.questions,
    id: id,
  };
  questions = questions.map((question) =>
    question.id === id ? updatedForm : question
  );
  if (questions) {
    response.json(questions);
  } else {
    response.status(404).end();
  }
});

//DELETE
//filter out the id with same id from request.params.id and set it to questions
questionsRouter.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  questions = questions.filter((element) => element.id !== id);
  if (questions) {
    response.json(questions);
  } else {
    response.status(404).end();
  }
});

//export modules
module.exports = questionsRouter;
