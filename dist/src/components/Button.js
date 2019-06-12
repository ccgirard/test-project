"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("antd/dist/antd.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonPrimary = function ButtonPrimary(props) {
  return _react.default.createElement(_antd.Button, {
    type: "primary"
  }, props.text);
};

var _default = ButtonPrimary;
exports.default = _default;

//# sourceMappingURL=Button.js.map