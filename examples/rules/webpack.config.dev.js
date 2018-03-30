var webpack = require('webpack');

module.exports = {
  devtool: 'sourcemap',
  entry: "./app.js",
  devServer: {
    port: 3001,
    historyApiFallback: true
  },
  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.(css|scss|sass)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};