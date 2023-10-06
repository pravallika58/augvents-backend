const express = require("express");
const { createRating } = require("../controller/ratingController");
const router = express.Router();

router.post("/ratings", createRating);

module.exports = router;
