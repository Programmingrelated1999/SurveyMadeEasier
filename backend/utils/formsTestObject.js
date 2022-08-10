let forms = [
  {
    name: "Form1",
    description: "Description1",
    questions: [
      { question_name: "question1", question_type: "multiple_choice" },
      { question_name: "question2", question_type: "text" },
    ],
    id: 1,
  },
  {
    name: "Form2",
    description: "Description2",
    questions: [
      { question_name: "question3", question_type: "agree_disagree" },
      { question_name: "question4", question_type: "review" },
    ],
    id: 2,
  },
  {
    name: "Form3",
    description: "Description3",
    questions: [
      { question_name: "question5", question_type: "text" },
      { question_name: "question6", question_type: "multiple_choice" },
    ],
    id: 3,
  },
];

module.exports = forms;
