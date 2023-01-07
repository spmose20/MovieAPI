"use strict";

var _express = _interopRequireDefault(require("express"));

var _charactercontroller = _interopRequireDefault(require("./charactercontroller"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 3001;
app.listen(port, function (req, res) {});