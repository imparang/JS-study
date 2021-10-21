const path = require('path') // NodeJS 내장 API
const HtmlWebpackPlugin = require('html-webpack-plugin')

// import dayjs from 'dayjs'  -> require()
// export function xyz(){}  -> module.exports
module.exports = (env, options) => {
  return {
    entry: './main.js', // 진입점
    output: {
      // path: path.resolve(__dirname, "dist"),
      // filename: "main.js"
    }, // 번들한 것을 어떤 파일로 어디에 내보낼 것인가
    module: {
      rules: [
        {
          test: /\.s?css$/, // using RegExp -> find @@.scss or @@.css files
          use: [
            'style-loader', 
            'css-loader',
            'postcss-loader', 
            'sass-loader'
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/, // 필수로 탐색에서 제거해줘야 함. 안그러면 오류 발생
          use: 'babel-loader'
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      })
    ]
  }
}
