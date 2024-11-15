"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectDatabase = exports.app = void 0;
require("reflect-metadata");
var _express = _interopRequireWildcard(require("express"));
var _dataSource = require("../data-source");
var _routes = require("./routes");
var _morgan = _interopRequireDefault(require("morgan"));
require("./config/container");
var _globalErrorHandler = require("./middlewares/globalErrorHandler");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const app = exports.app = (0, _express.default)();
_morgan.default.token("body", req => JSON.stringify(req.body));
app.use((0, _morgan.default)(":method :url :status :response-time ms - :body"));

// Middleware de Parsing para o Express aceitar request.body JSON
app.use((0, _express.json)());

// Arquivo de configuração das rotas
app.use(_routes.router);

// Middleware para lidar com erros na requisição
app.use(_globalErrorHandler.globalErrorHandler);
const connectDatabase = async () => {
  try {
    await _dataSource.datasource.initialize();
    console.log("Conectado ao banco de dados! 💾🛠️");
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados! ❌❌\n[ERROR]:", error);
    process.exit(1);
  }
};
exports.connectDatabase = connectDatabase;