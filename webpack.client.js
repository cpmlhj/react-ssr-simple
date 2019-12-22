const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')
// 服务端webpack
module.exports = {
      mode: 'development',
      entry: './client/index.js',
      output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
      },
      plugins: [
          new HTMLWebPackPlugin({
                filename: 'index.csr.html',
                template: 'index.csr.html',
                inject: true
          })
      ],
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
                        loader: ['style-loader', {
                              loader: 'css-loader',
                              options: {
                                    modules: true
                              }
                        }], // 支持JSX

                  }
            ]
      }
}