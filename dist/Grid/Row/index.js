'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    gutter: _propTypes.string,
    children: _propTypes.node
};

var defaultProps = {
    gutter: undefined,
    children: undefined
};

var Row = function Row(_ref) {
    var gutter = _ref.gutter,
        children = _ref.children;

    var gutters = gutter ? gutter.split(/ /) : [];
    return _react2.default.createElement(
        'div',
        null,
        gutter ? _react.Children.map(children, function (child) {
            return (0, _react.cloneElement)(child, { gutterV: gutters[0], gutterH: gutters[1] });
        }) : children
    );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

exports.default = Row;