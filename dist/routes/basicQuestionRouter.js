"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.questionRouter = void 0;
var _CreateBasicQuestionService = require("../services/Question/CreateBasic/CreateBasicQuestionService");
var _DeleteQuestionService = require("../services/Question/Delete/DeleteQuestionService");
var _FindBasicQuestionByIdService = require("../services/Question/FindById/FindBasicQuestionByIdService");
var _FindRandomQuestionService = require("../services/Question/FindRandom/FindRandomQuestionService");
var _FindSomeBasicQuestionService = require("../services/Question/FindSome/FindSomeBasicQuestionService");
require("express-async-errors");
var _express = require("express");
var _tsyringe = require("tsyringe");
var _verifyCreateBasicQuestion = require("../middlewares/Basic/verifyCreateBasicQuestion");
var _verifyGetRandomQuestion = require("../middlewares/Basic/verifyGetRandomQuestion");
var _geral = require("../middlewares/geral");
const questionRouter = exports.questionRouter = (0, _express.Router)();
questionRouter.post("/question/basic", [_verifyCreateBasicQuestion.verifyCreateBasicQuestion], async (req, res) => {
  const data = req.body;
  const service = _tsyringe.container.resolve(_CreateBasicQuestionService.CreateBasicQuestionService);
  const result = await service.execute(data);
  return res.status(201).json(result);
});
questionRouter.get("/question/random", [_verifyGetRandomQuestion.verifyGetRandomQuestion], async (req, res) => {
  const {
    type
  } = req.query;
  const service = _tsyringe.container.resolve(_FindRandomQuestionService.FindRandomQuestionService);
  const result = await service.execute(type);
  return res.status(201).json(result);
});
questionRouter.get("/question/many", [_geral.verifyTakeQuery], async (req, res) => {
  const {
    take
  } = req.query;
  const service = _tsyringe.container.resolve(_FindSomeBasicQuestionService.FindManyBasicQuestionService);
  const result = await service.execute(parseInt(take, 10));
  return res.status(201).json(result);
});
questionRouter.get("/question/:id", [_geral.verifyIDParams], async (req, res) => {
  console.log("rota acessada");
  const {
    id
  } = req.params;
  const service = _tsyringe.container.resolve(_FindBasicQuestionByIdService.FindQuestionByIdService);
  const result = await service.execute(id);
  return res.status(201).json(result);
});
questionRouter.delete("/question/:id", [_geral.verifyIDParams], async (req, res) => {
  const id = req.params.id;
  const service = _tsyringe.container.resolve(_DeleteQuestionService.DeleteQuestionService);
  const result = await service.execute(id);
  return res.status(201).json(result);
});