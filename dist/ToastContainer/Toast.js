'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _styled = require('./styled');

var _iconMap = require('./iconMap');

var _iconMap2 = _interopRequireDefault(_iconMap);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
    type: _propTypes.string.isRequired,
    content: _propTypes.node.isRequired,
    onClose: _propTypes.func.isRequired
};

var defaultProps = {};

var Toast = function Toast(_ref) {
    var type = _ref.type,
        content = _ref.content,
        onClose = _ref.onClose;
    return _react2.default.createElement(
        _styled.ToastWrapper,
        null,
        _react2.default.createElement(
            _styled.IconWrapper,
            { flex: '0 1 15%', justifyContent: 'center', alignItems: 'center', color: type },
            _react2.default.createElement(
                _Icon2.default,
                { color: 'white', scale: 'l' },
                _iconMap2.default[type]
            )
        ),
        _react2.default.createElement(
            _styled.ComponentWrapper,
            { flex: '0 1 80%', justifyContent: 'center', alignItems: 'center' },
            content
        ),
        _react2.default.createElement(
            _styled.CloseButtonWrapper,
            { flex: '0 1 5%', justifyContent: 'center', alignItems: 'center' },
            _react2.default.createElement(
                _styled.AbsoluteWrapper,
                null,
                _react2.default.createElement(
                    _Icon2.default,
                    { onClick: onClose },
                    'close'
                )
            )
        )
    );
};

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

exports.default = Toast;