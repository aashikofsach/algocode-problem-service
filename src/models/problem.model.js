const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Title is require"],
  },
  description: {
    type: String,
    require: [true, "description is required"],
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    require: [true, "difficulty mentioning is required"],
    default: "easy",
  },
  testCases: [
    {
      input: {
        type: String,
        require: true,
      },
      output: {
        type: String,
        require: true,
      },
    },
  ],

  editorial :{
    type : String
  }
});

const Probelm = mongoose.Model("Probelm",problemSchema);

module.exports = Probelm;
