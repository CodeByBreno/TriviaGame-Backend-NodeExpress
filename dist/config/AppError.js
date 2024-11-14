"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppError = void 0;
class AppError {
  constructor(message, code = 400) {
    this.message = void 0;
    this.code = void 0;
    this.message = message;
    this.code = code;
  }
}
exports.AppError = AppError;