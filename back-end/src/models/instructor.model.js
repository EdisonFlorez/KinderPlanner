const mongoose = require("mongoose");

//Schema
const instructor_schema = new mongoose.Schema({
  name: String,
  lastName: String,
  personalId: String,
  contact: Number,
  mail: String,
  password: String,
});

//Model
module.exports = mongoose.model("Instructor", instructor_schema);

