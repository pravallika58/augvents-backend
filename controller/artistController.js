const Artist = require("../models/artistModel");
const asyncHandler = require("express-async-handler");

// Creating Rating
const createArtist = asyncHandler(async (req, res) => {
  try {
    const { isLiked, artistName } = req.body;
    if (!artistName || !isLiked) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const newArtist = new Artist({
      isLiked,
      artistName,
    });
    await newArtist.save();
    res.status(201).json({ message: "Item liked successfully" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const deleteArtist = asyncHandler(async (req, res) => {
  try {
    const { artistName } = req.body;
    if (!artistName) {
      return res.status(400).json({ error: "Invalid data" });
    }
    const artist = await Artist.findOneAndDelete({ artistName });
    if (!artist) {
      return res.status(400).json({ error: "Artist not found" });
    }
    res.status(201).json({ message: "Event unlike" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const getAllArtist = asyncHandler(async (req, res) => {
  try {
    const artist = await Artist.find();
    if (!artist) {
      return res.status(400).json({ error: "Artist not found" });
    }
    res.status(201).send(artist);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  createArtist,
  deleteArtist,
  getAllArtist,
};
