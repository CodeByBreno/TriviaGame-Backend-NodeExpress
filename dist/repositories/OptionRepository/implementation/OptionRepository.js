"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionQuestionRepository = void 0;
var _dataSource = require("data-source");
var _OptionQuestion = require("../../../entities/OptionQuestion/OptionQuestion");
class OptionQuestionRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _dataSource.datasource.getRepository(_OptionQuestion.OptionQuestion);
  }
  create(data) {
    const object = this.ormRepository.create({
      text: data.text,
      correct: data.correct,
      type: data.type,
      equivalent_option_id: data.equivalent_option_id,
      question_id: data.question_id
    });
    return object;
  }
  async save(data) {
    const object = await this.ormRepository.save(data);
    return object;
  }
  async count() {
    const amount = await this.ormRepository.count();
    return amount;
  }
  async findById(id) {
    const searchedObject = await this.ormRepository.findOneBy({
      id_answer_question: id
    });
    return searchedObject;
  }
  async findMany(take) {
    const objects = await this.ormRepository.find({
      take: take
    });
    return objects;
  }
  async delete(id) {
    await this.ormRepository.delete(id);
  }
}
exports.OptionQuestionRepository = OptionQuestionRepository;