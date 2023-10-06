const Rating = require("../models/ratingModel");
const asyncHandler = require("express-async-handler");

// Creating Rating
const createRating = asyncHandler(async (req, res) => {
  try {
    const { totalRatings } = req.body;
    if (!totalRatings) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const newRating = new Rating({
      totalRatings,
    });
    await newRating.save();
    res.status(201).json({ message: "Rating data saved successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  createRating,
};
