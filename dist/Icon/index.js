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
    icon: _propTypes.string.isRequired,
    color: _propTypes.string,
    scale: _propTypes.string,
    className: _propTypes.string,
    loading: _propTypes.bool,
    onClick: _propTypes.func
};

var defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    loading: undefined,
    onClick: undefined
};

var Icon = function Icon(_ref) {
    var icon = _ref.icon,
        color = _ref.color,
        scale = _ref.scale,
        className = _ref.className,
        loading = _ref.loading,
        onClick = _ref.onClick;

    var classname = 'material-icons ' + (className || '');
    var iconValue = loading ? 'autorenew' : icon;
    return _react2.default.createElement(
        _styled.StyledIcon,
        { className: classname, color: color, scale: scale, loading: loading, onClick: onClick },
        iconValue
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;