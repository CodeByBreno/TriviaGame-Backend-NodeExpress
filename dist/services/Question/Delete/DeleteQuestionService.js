"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteQuestionService = void 0;
var _QuestionRepository = require("../../../repositories/QuestionRepository/implementation/QuestionRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteQuestionService = exports.DeleteQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _QuestionRepository.QuestionRepository === "undefined" ? Object : _QuestionRepository.QuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteQuestionService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }
  async execute(id) {
    await this.questionRepository.delete(id);
  }
}) || _class) || _class) || _class) || _class);