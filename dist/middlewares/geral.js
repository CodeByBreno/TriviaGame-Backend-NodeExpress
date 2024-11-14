"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyTakeQuery = exports.verifyIDParams = void 0;
var _celebrate = require("celebrate");
const verifyTakeQuery = exports.verifyTakeQuery = (0, _celebrate.celebrate)({
  [_celebrate.Segments.QUERY]: {
    take: _celebrate.Joi.number().required()
  }
});
const verifyIDParams = exports.verifyIDParams = (0, _celebrate.celebrate)({
  [_celebrate.Segments.PARAMS]: {
    id: _celebrate.Joi.string().uuid().required()
  }
});