//forms
let forms = [
  {
    name: "Form1",
    description: "Description1",
    questions: [
      { name: "question1", type: "multiple_choice", id: 112 },
      { name: "question2", type: "text", id: 113 },
    ],
    id: 1,
  },
  {
    name: "Form2",
    description: "Description2",
    questions: [
      { name: "question3", type: "agree_disagree", id: 114 },
      { name: "question4", type: "review", id: 115 },
    ],
    id: 2,
  },
  {
    name: "Form3",
    description: "Description3",
    questions: [
      { name: "question5", type: "text", id: 116 },
      { name: "question6", type: "multiple_choice", id: 117 },
    ],
    id: 3,
  },
];

//module exports
module.exports = forms;
