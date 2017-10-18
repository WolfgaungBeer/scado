'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Wrapper = require('../../__mocks__/Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('renders the Row and Column Component correctly', function () {
    var tree1 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _.Row,
            null,
            _react2.default.createElement(
                _.Column,
                { s: 12, m: 12, l: 6, xl: 6 },
                _react2.default.createElement(
                    'div',
                    null,
                    'test'
                )
            ),
            _react2.default.createElement(
                _.Column,
                { s: 12, m: 12, l: 6, xl: 6 },
                _react2.default.createElement(
                    'div',
                    null,
                    'test'
                )
            )
        )
    )).toJSON();
    expect(tree1).toMatchSnapshot();

    var tree2 = _reactTestRenderer2.default.create(_react2.default.createElement(
        _Wrapper2.default,
        null,
        _react2.default.createElement(
            _.Row,
            { gutter: 's s' },
            _react2.default.createElement(
                _.Column,
                { s: 12, m: 12, l: 6, xl: 6 },
                _react2.default.createElement(
                    'div',
                    null,
                    'test'
                )
            ),
            _react2.default.createElement(
                _.Column,
                { s: 12, m: 12, l: 6, xl: 6 },
                _react2.default.createElement(
                    'div',
                    null,
                    'test'
                )
            )
        )
    )).toJSON();
    expect(tree2).toMatchSnapshot();
});