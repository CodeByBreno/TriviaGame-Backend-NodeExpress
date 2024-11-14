"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateBasicQuestionService = void 0;
var _tsyringe = require("tsyringe");
var _IQuestionRepository = require("../../../repositories/QuestionRepository/IQuestionRepository");
var _IOptionRepository = require("../../../repositories/OptionRepository/IOptionRepository");
var _dec, _dec2, _dec3, _dec4, _dec5, _class;
let CreateBasicQuestionService = exports.CreateBasicQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("QuestionRepository")(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)("OptionQuestionRepository")(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.IQuestionRepository === "undefined" ? Object : _IQuestionRepository.IQuestionRepository, typeof _IOptionRepository.IOptionQuestionRepository === "undefined" ? Object : _IOptionRepository.IOptionQuestionRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class CreateBasicQuestionService {
  constructor(questionRepository, optionQuestionRepository) {
    this.questionRepository = questionRepository;
    this.optionQuestionRepository = optionQuestionRepository;
  }
  async execute(data) {
    const amountElements = await this.questionRepository.count();
    const question = await this.questionRepository.create({
      text: data.text,
      image_url: data.image_url,
      QUESTION: amountElements + 1,
      time: data.time,
      type: "basic"
    });
    const createdQuestion = await this.questionRepository.save(question);
    const createdOptions = await Promise.all(data.options.map(async option => {
      const optionToCreate = this.optionQuestionRepository.create({
        text: option.text,
        correct: option.correct,
        type: "basic",
        question_id: createdQuestion.id_basic_question
      });
      return this.optionQuestionRepository.save(optionToCreate);
    }));
    createdQuestion.options = createdOptions;
    return createdQuestion;
  }
}) || _class) || _class) || _class) || _class) || _class);