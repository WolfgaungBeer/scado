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
