const Feedback = require("../models/feedbackModel");
const asyncHandler = require("express-async-handler");

// Creating Rating
const createFeedback = asyncHandler(async (req, res) => {
  try {
    const { feedback } = req.body;
    if (!feedback) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const newFeedback = new Feedback({
      feedback,
    });
    await newFeedback.save();
    res.status(201).json({ message: "Feedback saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  createFeedback,
};
