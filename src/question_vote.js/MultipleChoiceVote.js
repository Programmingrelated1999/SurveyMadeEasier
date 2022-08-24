import React from "react";

//Multiple Choice with checkboxes of choices
const MultipleChoiceVote = () => {
  return (
    <div>
      <input type="checkbox" name="pets" value="Choice A" /> Choice A
      <br />
      <input type="checkbox" name="pets" value="Choice B" /> Choice B
      <br />
      <input type="checkbox" name="pets" value="Choice C" /> Choice C
      <br />
      <input type="checkbox" name="pets" value="Choice D" /> Choice D
      <br />
    </div>
  );
};

export default MultipleChoiceVote;
