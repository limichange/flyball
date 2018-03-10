# flyball

## Install
```
$ npm i flyball --save
```

## Usage

### Dom
```js
const from = document.getElementById('from')
const to = document.getElementById('to')

flyball(from, to)
```

### Position
```js
const from = { top: 0, left: 100 }
const to = { top: 100, left: 0 }

flyball(from, to)
```

### Position and dom

```js
const from = { top: 0, left: 100 }
const to = document.getElementById('to')

flyball(from, to)
```

## Author

MIT @ Limichange
