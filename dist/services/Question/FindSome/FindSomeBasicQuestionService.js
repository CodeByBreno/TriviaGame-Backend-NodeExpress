"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindManyBasicQuestionService = void 0;
var _AppError = require("../../../config/AppError");
var _IQuestionRepository = require("../../../repositories/QuestionRepository/IQuestionRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let FindManyBasicQuestionService = exports.FindManyBasicQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindManyBasicQuestionService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }
  async execute(take = 20) {
    const questions = await this.questionRepository.findMany(take);
    if (!questions || questions.length === 0) {
      throw new _AppError.AppError("Erro ao encontrar perguntas", 404);
    }
    return questions;
  }
}) || _class) || _class) || _class) || _class);