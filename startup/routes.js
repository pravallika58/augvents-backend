const morgan = require("morgan");
const cookie = require("cookie-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const ratingRouter = require("./../routes/ratingRoute");
const feedbackRouter = require("./../routes/feedbackRoute");
const artistRouter = require("./../routes/artistRoute");

module.exports = function (app) {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cookie());

  app.use("/api", ratingRouter);
  app.use("/api", feedbackRouter);
  app.use("/api", artistRouter);
};
