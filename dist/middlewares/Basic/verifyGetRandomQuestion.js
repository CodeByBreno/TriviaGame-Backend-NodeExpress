"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyGetRandomQuestion = void 0;
var _celebrate = require("celebrate");
const verifyGetRandomQuestion = exports.verifyGetRandomQuestion = (0, _celebrate.celebrate)({
  [_celebrate.Segments.QUERY]: {
    type: _celebrate.Joi.string().required().valid("basic", "image", "match")
  }
});