'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _fieldPropTypes = require('../fieldPropTypes');

var _fieldPropTypes2 = _interopRequireDefault(_fieldPropTypes);

var _defaultFieldPropTypes = require('../defaultFieldPropTypes');

var _defaultFieldPropTypes2 = _interopRequireDefault(_defaultFieldPropTypes);

var _styled = require('./styled');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = _extends({}, _fieldPropTypes2.default, {
    type: (0, _propTypes.oneOf)(['email', 'text', 'password', 'number', 'url']).isRequired,
    label: _propTypes.node,
    required: _propTypes.bool,
    className: _propTypes.string,
    onClick: _propTypes.func
});

var defaultProps = _extends({}, _defaultFieldPropTypes2.default, {
    type: undefined,
    label: undefined,
    required: undefined,
    className: undefined,
    onClick: undefined
});

var InputField = function InputField(_ref) {
    var input = _ref.input,
        meta = _ref.meta,
        type = _ref.type,
        label = _ref.label,
        required = _ref.required,
        className = _ref.className,
        onClick = _ref.onClick;
    var touched = meta.touched,
        error = meta.error,
        warning = meta.warning,
        form = meta.form;

    var hasError = touched && error;
    var hasWarning = touched && warning;
    var id = form + '-' + input.name;
    return _react2.default.createElement(
        _styled.FieldWrapper,
        { className: className, onClick: onClick },
        label && _react2.default.createElement(
            _Text2.default.Label,
            { htmlFor: id },
            label,
            ' ',
            required && _react2.default.createElement(
                _Text2.default.Span,
                { color: 'error' },
                '*'
            )
        ),
        _react2.default.createElement(_styled.FieldInput, _extends({ id: id, type: type }, input)),
        hasError && _react2.default.createElement(
            _Text2.default.Span,
            { color: 'error', scale: 's' },
            _react2.default.createElement(
                _Icon2.default,
                { color: 'error', scale: 's' },
                'clear'
            ),
            ' ',
            error
        ),
        hasWarning && _react2.default.createElement(
            _Text2.default.Span,
            { color: 'warning', scale: 's' },
            _react2.default.createElement(
                _Icon2.default,
                { color: 'warning', scale: 's' },
                'warning'
            ),
            ' ',
            warning
        )
    );
};

InputField.propTypes = propTypes;
InputField.defaultProps = defaultProps;

exports.default = InputField;