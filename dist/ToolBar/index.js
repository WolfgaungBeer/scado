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
    children: _propTypes.node,
    actionButtons: _propTypes.node
};

var defaultProps = {
    children: undefined,
    actionButtons: undefined
};

var ToolBar = function ToolBar(_ref) {
    var children = _ref.children,
        actionButtons = _ref.actionButtons;
    return _react2.default.createElement(
        _styled.StyledToolBar,
        { alignItems: 'center', justifyContent: 'space-between' },
        _react2.default.createElement(
            _styled.ChildrenWrapper,
            { alignItems: 'center' },
            children
        ),
        actionButtons && _react2.default.createElement(
            _styled.ChildrenWrapper,
            { alignItems: 'center' },
            actionButtons
        )
    );
};

ToolBar.propTypes = propTypes;
ToolBar.defaultProps = defaultProps;

exports.default = ToolBar;