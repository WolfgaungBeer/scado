'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonActions = require('@storybook/addon-actions');

var _ = require('./');

var _2 = _interopRequireDefault(_);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionButtons = function ActionButtons() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Icon2.default, { icon: 'search', color: 'white', scale: 'l', onClick: (0, _addonActions.action)('action button 1 clicked') }),
        _react2.default.createElement(_Icon2.default, { icon: 'settings', color: 'white', scale: 'l', onClick: (0, _addonActions.action)('action button 2 clicked') }),
        _react2.default.createElement(_Icon2.default, { icon: 'keyboard_arrow_down', color: 'white', scale: 'l', onClick: (0, _addonActions.action)('action button 3 clicked') })
    );
};

(0, _react3.storiesOf)('ToolBar', module).add('default', function () {
    return _react2.default.createElement(
        _2.default,
        { actionButtons: _react2.default.createElement(ActionButtons, null) },
        _react2.default.createElement(_Icon2.default, { icon: 'dashboard', color: 'white', scale: 'xl', onClick: (0, _addonActions.action)('menu clicked') }),
        _react2.default.createElement(
            _Text2.default.Span,
            { color: 'white', scale: 'l', onClick: (0, _addonActions.action)('text clicked') },
            'Massiv App'
        )
    );
});