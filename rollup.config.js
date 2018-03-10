const createConfig = require('create-rollup-lib-config')

module.exports = createConfig({
  name: 'flyball',
  author: 'Limichange',
  version: process.env.VERSION || require('./package.json').version
})
