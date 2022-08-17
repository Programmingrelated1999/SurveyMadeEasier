import axios from "axios";

const formUrl = "http://localhost:3001/api/forms/";
const questionUrl = "http://localhost:3001/api/questions/";

export const getAll = async () => {
  const response = await axios.get(formUrl);
  return response.data;
};

//postForm which post the newForm first, then get the response value which will contain information about form
//create a questions variable from content.questions array. For each question post to questionUrl with question data and newForm id
export const postForm = async (content) => {
  const newForm = await axios.post(formUrl, {
    name: content.name,
    description: content.description,
  });

  const questions = content.questions;
  await questions.forEach((question) => {
    axios.post(questionUrl, {
      name: question.name,
      type: question.type,
      formId: newForm.data.id,
    });
  });

  return newForm.data;
};
