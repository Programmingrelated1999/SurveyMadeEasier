//import
import axios from "axios";

//form and question base url
const formUrl = "http://localhost:3001/api/forms/";
const questionUrl = "http://localhost:3001/api/questions/";

//getAll
export const getAll = async () => {
  const response = await axios.get(formUrl);
  return response.data;
};

//getOneForm
//get a specific form data from the id given
export const getOneForm = async (id) => {
  const url = formUrl + "/" + String(id);
  const response = await axios.get(url);
  return response.data;
};

//postForm which post the newForm first, then get the response value which will contain information about form
//create a questions variable from content.questions array. For each question post to questionUrl with question data(only name and type) and newForm id
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

export const getForms = async (store, createFormList) => {
  //getAll gets the JSON of the GET method. For each item forms in the array, store it in initial states using dispatch method and calling createFormList
  getAll().then((forms) => {
    forms.forEach((form) => {
      console.log(form.questions);
      store.dispatch(
        createFormList({
          name: form.name,
          description: form.description,
          questions: form.questions,
          id: form.id,
        })
      );
    });
  });
};
