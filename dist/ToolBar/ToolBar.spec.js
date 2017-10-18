'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Wrapper = require('../../__mocks__/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var click = function click() {};

var ActionButtons = function ActionButtons() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Icon2.default,
            { color: 'white', scale: 'l', onClick: click },
            'search'
        ),
        _react2.default.createElement(
            _Icon2.default,
            { color: 'white', scale: 'l', onClick: click },
            'settings'
        ),
        _react2.default.createElement(
            _Icon2.default,
            { color: 'white', scale: 'l', onClick: click },
            'keyboard_arrow_down'
        )
    );
};

it('renders the ToolBar Component correctly', function () {
    var tree = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _2.default,
            { actionButtons: _react2.default.createElement(ActionButtons, null) },
            _react2.default.createElement(
                _Icon2.default,
                { color: 'white', scale: 'xl', onClick: click },
                'dashboard'
            ),
            _react2.default.createElement(
                _Text2.default.Span,
                { color: 'white', scale: 'l', onClick: click },
                'Massiv App'
            )
        )
    )).toJSON();
    expect(tree).toMatchSnapshot();
});