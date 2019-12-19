const path = require('path')

// 服务端webpack
module.exports = {
      mode: 'development',
      entry: './client/index.js',
      output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
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
                        loader: ['style-loader', 'css-loader'], // 支持JSX

                  }
            ]
      }
}