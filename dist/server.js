"use strict";

var _http = _interopRequireDefault(require("http"));
var _app = require("./app");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const server = _http.default.createServer(_app.app);
(0, _app.connectDatabase)().then(() => {
  server.listen(process.env.PORT || 3100, async () => {
    console.log(`🚀 Server started on port ${process.env.PORT || 3100}!`);
  });
});