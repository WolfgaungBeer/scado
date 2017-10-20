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
    flat: _propTypes.bool,
    raised: _propTypes.bool,
    border: _propTypes.bool,
    disabled: _propTypes.bool,
    color: _propTypes.string,
    scale: _propTypes.string,
    className: _propTypes.string,
    children: _propTypes.node,
    onClick: _propTypes.func
};

var defaultProps = {
    type: undefined,
    flat: undefined,
    raised: undefined,
    border: undefined,
    disabled: undefined,
    color: undefined,
    scale: undefined,
    className: undefined,
    children: undefined,
    onClick: undefined
};

var Button = function Button(_ref) {
    var type = _ref.type,
        flat = _ref.flat,
        raised = _ref.raised,
        border = _ref.border,
        disabled = _ref.disabled,
        color = _ref.color,
        scale = _ref.scale,
        className = _ref.className,
        children = _ref.children,
        onClick = _ref.onClick;
    return _react2.default.createElement(
        _styled.StyledButton,
        {
            type: type,
            flat: flat,
            raised: raised,
            border: border,
            disabled: disabled,
            color: color,
            scale: scale,
            className: className,
            onClick: onClick
        },
        children
    );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

exports.default = Button;