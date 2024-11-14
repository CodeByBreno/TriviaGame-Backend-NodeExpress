"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OptionQuestion = void 0;
var _Question = require("../Question/Question");
var _classTransformer = require("class-transformer");
var _typeorm = require("typeorm");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
function _initializerDefineProperty(e, i, r, l) { r && Object.defineProperty(e, i, { enumerable: r.enumerable, configurable: r.configurable, writable: r.writable, value: r.initializer ? r.initializer.call(l) : void 0 }); }
function _applyDecoratedDescriptor(i, e, r, n, l) { var a = {}; return Object.keys(n).forEach(function (i) { a[i] = n[i]; }), a.enumerable = !!a.enumerable, a.configurable = !!a.configurable, ("value" in a || a.initializer) && (a.writable = !0), a = r.slice().reverse().reduce(function (r, n) { return n(i, e, r) || r; }, a), l && void 0 !== a.initializer && (a.value = a.initializer ? a.initializer.call(l) : void 0, a.initializer = void 0), void 0 === a.initializer ? (Object.defineProperty(i, e, a), null) : a; }
function _initializerWarningHelper(r, e) { throw Error("Decorating class property failed. Please ensure that transform-class-properties is enabled and runs after the decorators transform."); }
let OptionQuestion = exports.OptionQuestion = (_dec = (0, _typeorm.Entity)("option_question"), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("uuid"), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.Column)(), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.Column)(), _dec7 = Reflect.metadata("design:type", Boolean), _dec8 = (0, _typeorm.Column)(), _dec9 = Reflect.metadata("design:type", String), _dec10 = (0, _typeorm.Column)({
  nullable: true
}), _dec11 = Reflect.metadata("design:type", String), _dec12 = (0, _typeorm.OneToOne)(() => OptionQuestion), _dec13 = (0, _typeorm.JoinColumn)({
  name: "equivalent_option_id"
}), _dec14 = Reflect.metadata("design:type", Object), _dec15 = (0, _typeorm.Column)(), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.ManyToOne)(() => _Question.Question, question => question.options), _dec18 = (0, _typeorm.JoinColumn)({
  name: "question_id"
}), _dec19 = Reflect.metadata("design:type", typeof _Question.Question === "undefined" ? Object : _Question.Question), _dec20 = (0, _typeorm.CreateDateColumn)(), _dec21 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec22 = (0, _typeorm.UpdateDateColumn)(), _dec23 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec24 = (0, _classTransformer.Exclude)(), _dec25 = (0, _typeorm.DeleteDateColumn)(), _dec26 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = (_class2 = class OptionQuestion {
  constructor() {
    _initializerDefineProperty(this, "id_answer_question", _descriptor, this);
    _initializerDefineProperty(this, "text", _descriptor2, this);
    _initializerDefineProperty(this, "correct", _descriptor3, this);
    _initializerDefineProperty(this, "type", _descriptor4, this);
    _initializerDefineProperty(this, "equivalent_option_id", _descriptor5, this);
    _initializerDefineProperty(this, "equivalent_option", _descriptor6, this);
    _initializerDefineProperty(this, "question_id", _descriptor7, this);
    _initializerDefineProperty(this, "question", _descriptor8, this);
    _initializerDefineProperty(this, "created_at", _descriptor9, this);
    _initializerDefineProperty(this, "updated_at", _descriptor10, this);
    _initializerDefineProperty(this, "deleted_at", _descriptor11, this);
  }
}, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "id_answer_question", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "text", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "correct", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "equivalent_option_id", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "equivalent_option", [_dec12, _dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "question_id", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "question", [_dec17, _dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "created_at", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "updated_at", [_dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "deleted_at", [_dec24, _dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _class2)) || _class);