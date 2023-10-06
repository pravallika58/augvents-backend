const express = require("express");
const { createFeedback } = require("../controller/feedbackController");

const router = express.Router();

router.post("/feedback", createFeedback);

module.exports = router;
