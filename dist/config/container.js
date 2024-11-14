"use strict";

var _OptionRepository = require("../repositories/OptionRepository/implementation/OptionRepository");
var _QuestionRepository = require("../repositories/QuestionRepository/implementation/QuestionRepository");
var _tsyringe = require("tsyringe");
_tsyringe.container.registerSingleton("QuestionRepository", _QuestionRepository.QuestionRepository);
_tsyringe.container.registerSingleton("OptionQuestionRepository", _OptionRepository.OptionQuestionRepository);