//MONGOOSE
const mongoose = require("mongoose");

//Schema Definition
//name - String, type - String, form - {Form Schema}
const questionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  form: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
  },
});

//setSchema
questionsSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

//exports
module.exports = mongoose.model("Question", questionsSchema);
