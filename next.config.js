const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript({
  webpack: (config, options) => {
    const resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '~': path.resolve('./')
      },
      extensions: ['.web.tsx', '.web.ts'].concat(config.resolve.extensions)
    }
    return {
      ...config,
      resolve,
    }
  }
})
