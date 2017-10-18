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
    color: _propTypes.string,
    scale: _propTypes.string,
    className: _propTypes.string,
    loading: _propTypes.bool,
    onClick: _propTypes.func,
    children: _propTypes.node
};

var defaultProps = {
    color: undefined,
    scale: undefined,
    className: undefined,
    loading: undefined,
    onClick: undefined,
    children: undefined
};

var Icon = function Icon(_ref) {
    var color = _ref.color,
        scale = _ref.scale,
        className = _ref.className,
        loading = _ref.loading,
        onClick = _ref.onClick,
        children = _ref.children;

    var classname = 'material-icons ' + (className || '');
    var iconValue = loading ? 'autorenew' : children;
    return _react2.default.createElement(
        _styled.StyledIcon,
        { className: classname, color: color, scale: scale, loading: loading, onClick: onClick },
        iconValue
    );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

exports.default = Icon;