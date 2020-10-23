"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Cblock() {
  var min = 0;
  var max = 10;
  var a = Math.round(Math.random() * (max - min) + min);
  return a;
}

var _default = 'Cblock';
exports["default"] = _default;