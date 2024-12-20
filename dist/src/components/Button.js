"use strict";

// here is a comment added to button js to test comment functionality

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("antd/dist/antd.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AntButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AntButton, _React$Component);

  function AntButton() {
    _classCallCheck(this, AntButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(AntButton).apply(this, arguments));
  }

  _createClass(AntButton, [{
    key: "render",
    // Set default properties
    value: function render() {
      var _this$props = _objectSpread({}, this.props),
          label = _this$props.label,
          type = _this$props.type,
          size = _this$props.size,
          icon = _this$props.icon,
          disabled = _this$props.disabled,
          ghost = _this$props.ghost,
          circle = _this$props.circle,
          onClick = _this$props.onClick;

      var labeledButton = React.createElement(_antd.Button, {
        type: type,
        size: size,
        icon: icon,
        disabled: disabled,
        ghost: ghost,
        onClick: onClick,
        block: true
      }, label);
      var circledButton = React.createElement(_antd.Button, {
        type: type,
        size: size,
        icon: icon,
        disabled: disabled,
        ghost: ghost,
        onClick: onClick,
        shape: "circle"
      });
      return circle ? circledButton : labeledButton;
    }
  }]);

  return AntButton;
}(React.Component);

exports.default = AntButton;

_defineProperty(AntButton, "defaultProps", {
  width: 68,
  height: 32,
  label: "Label",
  type: "default",
  size: "default",
  icon: "",
  disabled: false,
  ghost: false,
  circle: false,
  onClick: function onClick() {}
});

//# sourceMappingURL=Button.js.map
