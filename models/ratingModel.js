const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema(
  {
    totalRatings: {
      type: Number, // Define it as a number
      default: 0, // Default value is 0
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);
