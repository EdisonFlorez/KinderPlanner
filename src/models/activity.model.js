const mongoose = require("mongoose");

// Schema
const activity_schema = new mongoose.Schema({
  date: Date,
  activityName: String,
  description: String,
  activityTerm:{type: Date, default: Date.now },
});

// Model
const Activity = new mongoose.model("Activity", activity_schema);
export default Activity;
