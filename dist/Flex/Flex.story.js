'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: 100px;\n    background-color: #999999;\n'], ['\n    width: 100%;\n    height: 100px;\n    background-color: #999999;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    width: 20px;\n    height: 80px;\n    background-color: ', ';\n'], ['\n    width: 20px;\n    height: 80px;\n    background-color: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _addonKnobs = require('@storybook/addon-knobs');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FlexParent = _2.default.extend(_templateObject);

var FlexChild = _2.default.extend(_templateObject2, function (props) {
    return props.theme.color.success;
});

(0, _react3.storiesOf)('Flex', module).add('default', function () {
    return _react2.default.createElement(
        FlexParent,
        {
            inline: (0, _addonKnobs.boolean)('inline', false),
            justifyContent: (0, _addonKnobs.text)('justifyContent', 'space-around'),
            alignItems: (0, _addonKnobs.text)('alignItems', 'center')
        },
        _react2.default.createElement(FlexChild, { flex: '0 1 auto' }),
        _react2.default.createElement(FlexChild, { flex: '0 1 auto' }),
        _react2.default.createElement(FlexChild, { flex: '0 1 auto' }),
        _react2.default.createElement(FlexChild, { flex: '0 1 auto' }),
        _react2.default.createElement(FlexChild, { flex: '0 1 auto' })
    );
}).add('children', function () {
    var flexChildText = (0, _addonKnobs.text)('flex', '0 1 auto');
    return _react2.default.createElement(
        FlexParent,
        { justifyContent: 'space-around', alignItems: 'center' },
        _react2.default.createElement(FlexChild, { flex: flexChildText }),
        _react2.default.createElement(FlexChild, { flex: flexChildText }),
        _react2.default.createElement(FlexChild, { flex: flexChildText }),
        _react2.default.createElement(FlexChild, { flex: flexChildText }),
        _react2.default.createElement(FlexChild, { flex: flexChildText })
    );
});