
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx']
          },
        },
      },
      {
        test: /\.(jpg|png|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        // Set your API key here
        GOOGLE_API_KEY: JSON.stringify('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'),
      },
    }),
  ],
  resolve: {
    fallback: {
      fs: 'memory',
      querystring: require.resolve('querystring'),
      http: require.resolve('stream-http'),
      https: require.resolve('https-browserify'),
      buffer: require.resolve('buffer/'),
      process: require.resolve('process/browser'),
      path: require.resolve('path-browserify'),
      url: require.resolve('url/')
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
  }
};