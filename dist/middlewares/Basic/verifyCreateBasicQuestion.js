"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyCreateBasicQuestion = void 0;
var _celebrate = require("celebrate");
const verifyCreateBasicQuestion = exports.verifyCreateBasicQuestion = (0, _celebrate.celebrate)({
  [_celebrate.Segments.BODY]: {
    text: _celebrate.Joi.string().required(),
    image_url: _celebrate.Joi.string().allow(""),
    time: _celebrate.Joi.number().default(30),
    options: _celebrate.Joi.array().items(_celebrate.Joi.object({
      text: _celebrate.Joi.string(),
      correct: _celebrate.Joi.boolean()
    }))
  }
});