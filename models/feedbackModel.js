const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    feedback: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
