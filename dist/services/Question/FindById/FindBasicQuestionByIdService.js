"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindQuestionByIdService = void 0;
var _AppError = require("../../../config/AppError");
var _QuestionRepository = require("../../../repositories/QuestionRepository/implementation/QuestionRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let FindQuestionByIdService = exports.FindQuestionByIdService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _QuestionRepository.QuestionRepository === "undefined" ? Object : _QuestionRepository.QuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindQuestionByIdService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }
  async execute(id) {
    const question = await this.questionRepository.findById(id);
    if (!question) {
      throw new _AppError.AppError("Pergunta não encontrada", 404);
    }
    return question;
  }
}) || _class) || _class) || _class) || _class);