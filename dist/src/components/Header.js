"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("../logo.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
  return _react.default.createElement("header", {
    className: "App-header"
  }, _react.default.createElement("img", {
    src: _logo.default,
    className: "App-logo",
    alt: "logo"
  }), _react.default.createElement("p", null, "Edit ", _react.default.createElement("code", null, "src/App.js"), " and save to reload."), _react.default.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React"));
};

var _default = Header;
exports.default = _default;

//# sourceMappingURL=Header.js.map