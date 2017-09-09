# scado
a themeable react component library

## installation

scado uses redux for some of its features, so you will need to mount the scadoReducer like this:

```javascript
const reducers = combineReducers({
    // your reducers go here
    scado: scadoReducers
});
```
