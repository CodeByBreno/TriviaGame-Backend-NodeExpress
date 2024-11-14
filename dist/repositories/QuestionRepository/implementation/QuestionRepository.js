"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionRepository = void 0;
var _dataSource = require("data-source");
var _Question = require("../../../entities/Question/Question");
class QuestionRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = _dataSource.datasource.getRepository(_Question.Question);
  }
  async create(data) {
    const object = this.ormRepository.create({
      text: data.text,
      image_url: data.image_url,
      QUESTION: data.QUESTION,
      type: data.type,
      time: data.time
    });
    return object;
  }
  async count() {
    const amount = await this.ormRepository.count();
    return amount;
  }
  async save(data) {
    const savedObject = await this.ormRepository.save(data);
    return savedObject;
  }
  async findById(id) {
    const searchedObject = await this.ormRepository.findOne({
      where: {
        id_basic_question: id
      },
      relations: ["options"]
    });
    return searchedObject;
  }
  async findRandomQuestion(type) {
    const searchedObject = await this.ormRepository.createQueryBuilder("question").where("question.type = :type", {
      type
    }).leftJoinAndSelect("question.options", "option_question").orderBy("RANDOM()").getOne();
    return searchedObject;
  }
  async findSomeRandomQuestions(type, take) {
    const searchedObjects = await this.ormRepository.createQueryBuilder("question").where("question.type = :type", {
      type
    }).leftJoinAndSelect("question.options", "option_question").orderBy("RANDOM()").take(take).getMany();
    if (searchedObjects.length === 0) {
      return null;
    }
    return searchedObjects;
  }
  async findMany(take) {
    const objects = await this.ormRepository.find({
      take: take,
      relations: ["options"]
    });
    return objects;
  }
  async delete(id) {
    await this.ormRepository.delete(id);
  }
}
exports.QuestionRepository = QuestionRepository;