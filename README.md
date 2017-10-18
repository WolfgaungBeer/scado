# scado
a themeable react component library

## installation

scado requires you to mount its reducer at 'scado':

```javascript
import { scadoReducers } from 'scado';

const reducers = combineReducers({
    // your reducers go here
    scado: scadoReducers
});
```

You will need to mount the scado Theme Component right after the Provider Component:

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Theme } from 'scado';

const Root = () => (
    <Provider store={store}>
        <Theme>
            // add your Components here
        </Theme>
    </Provider>
);

render(<Root />, document.getElementById('root'));
```

scado uses material-design-icons. You will need to include the following css in your project. Please check the path to the material-design-icons folder!

```css
@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
       local('MaterialIcons-Regular'),
       url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
       url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.woff) format('woff'),
       url(../node_modules/material-design-icons/iconfont/MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
}

```
