'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styled = require('./styled');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    type: (0, _propTypes.oneOf)(['submit', 'button']),
    buttonType: (0, _propTypes.oneOf)(['flat', 'raised', 'border']),
    disabled: _propTypes.bool,
    color: _propTypes.string,
    scale: _propTypes.string,
    children: _propTypes.node,
    onClick: _propTypes.func
};

var defaultProps = {
    type: undefined,
    buttonType: undefined,
    disabled: undefined,
    color: undefined,
    scale: undefined,
    children: undefined,
    onClick: undefined
};

var Button = function Button(_ref) {
    var type = _ref.type,
        buttonType = _ref.buttonType,
        disabled = _ref.disabled,
        color = _ref.color,
        scale = _ref.scale,
        children = _ref.children,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        _styled.StyledButton,
        { type: type, buttonType: buttonType, disabled: disabled, color: color, scale: scale, onClick: onClick },
        children
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;