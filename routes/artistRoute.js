const express = require("express");
const {
  createArtist,
  deleteArtist,
  getAllArtist,
} = require("../controller/artistController");

const router = express.Router();

router.post("/like", createArtist);
router.put("/unlike", deleteArtist);
router.get("/all", getAllArtist);

module.exports = router;
