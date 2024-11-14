"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindRandomQuestionService = void 0;
var _AppError = require("../../../config/AppError");
var _IQuestionRepository = require("../../../repositories/QuestionRepository/IQuestionRepository");
var _tsyringe = require("tsyringe");
var _dec, _dec2, _dec3, _dec4, _class;
let FindRandomQuestionService = exports.FindRandomQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class FindRandomQuestionService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }
  async execute(type) {
    let question;
    question = await this.questionRepository.findRandomQuestion(type);
    if (!question) {
      throw new _AppError.AppError("Pergunta não encontrada", 404);
    }
    return question;
  }
}) || _class) || _class) || _class) || _class);