const path = require('path')
const webpack = require('webpack')

let config = {

  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'public/js'),
    publicPath: '/js',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.ts', '.vue', '.css']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    noInfo: true,
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map',

  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/]
      }
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          'scss': 'vue-style-loader!css-loader!sass-loader',
          'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        }
      }
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },

  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

module.exports = config

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    // 	sourceMap: true,
    // 	compress: {
    // 		warnings: false
    // 	}
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
