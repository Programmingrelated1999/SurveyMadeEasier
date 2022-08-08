import React from "react";

//Multiple Choice with checkboxes of choices
const MultipleChoice = () => {
  return (
    <div>
      <input type="checkbox" name="pets" value="Choice A" disabled /> Choice A
      <br />
      <input type="checkbox" name="pets" value="Choice B" disabled /> Choice B
      <br />
      <input type="checkbox" name="pets" value="Choice C" disabled /> Choice C
      <br />
      <input type="checkbox" name="pets" value="Choice D" disabled /> Choice D
      <br />
    </div>
  );
};

export default MultipleChoice;
