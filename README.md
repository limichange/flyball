# flyball
Create flyball animation so easy 👍

## Install
```sh
$ npm i flyball --save
# or
$ yarn add flyball
```

## Usage
```js
import flyball from 'flyball'
import 'flyball/dist/flyball.css'
```

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

## Development
```sh
$ npm run dev
```

## Contributing
 - Fork it! 😆
 - Create your feature branch: git checkout -b my-new-feature
 - Commit your changes: git commit -am 'Add some feature'
 - Push to the branch: git push origin my-new-feature
 - Submit a PR 🍻

## Author

MIT @ Limichange
