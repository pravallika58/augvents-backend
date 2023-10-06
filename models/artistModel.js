const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  isLiked: {
    type: Boolean,
    default: false,
  },
  artistName: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("Artist", artistSchema);
