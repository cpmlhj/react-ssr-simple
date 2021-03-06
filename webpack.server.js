const path = require('path')
const nodeExternals = require('webpack-node-externals')

// 服务端webpack
module.exports = {
      target: 'node',
      mode: 'development',
      entry: './server/index.js',
      externals: [nodeExternals()],
      output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
      },
      module: {
            rules: [
                  {
                        test: /\.js$/,
                        loader: 'babel-loader', // 支持JSX
                        exclude: '/node_modules/',
                        options: {
                              presets: ['@babel/preset-react', ['@babel/preset-env']]
                        }
                  },
                  {
                        test: /\.css$/,
                        use: ['isomorphic-style-loader', {
                              loader: 'css-loader',
                              options: {
                                    modules: true
                              }
                        }], // 支持JSX

                  }
            ]
      }
}