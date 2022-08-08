## Description

Survey Applications

## User Stories

## Sketches

## Process

## Challenges

August 4th - One of the challenges I faced was figuring out how to set up a form liked element inside another form. The outside form is the question form. The inside formlike was more of a question type form where user select a question type and the app conditionally renders the requirements for making that question. For example, when the user clicks next question button on the form, the user will be presented with a dropdown menu consisting of multiple_choices, text, review, etc... Suppose, the user choose multiple choices, then the user will be able to set up the choices. This was a challenge where the inside form would submit the outside form as well.

August 8th - Today I faced a challenge of showing the form(redux-state)'s questions. I used useSelector to store the state into a variable and then list the questions in the variable. However, its been a while since I learned redux and I got into trouble with printing the questions, later I found out that the state variable holds the form object which includes name, description and questions list. I have been directly printing out the question list from the state when I should have print from state.questions(since questions is part of the object).

## Lesson Learn

One of the lesson I learned is that HTML does not allow nested forms.

I learnt how to wrap the component with Provider component from redux and useSelector and useDispatch to get data from the store and send actions to the reducers.

## Results and Feedback
