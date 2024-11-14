"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;
var _basicQuestionRouter = require("./routes/basicQuestionRouter");
var _express = require("express");
const router = exports.router = (0, _express.Router)();
router.use(_basicQuestionRouter.questionRouter);