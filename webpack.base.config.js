const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
module.exports = {

  // context directory is src
  context: path.join(__dirname, 'src'),

  // entiry file of the project, (relative to context)
  entry: ['./js/main.ts'],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {

    // distribution directory
    path: path.resolve(__dirname, 'dist'),

    filename: 'game.min.[hash:8].js',
  },
  target: 'web',

  plugins: [

    // copy all src/assets to dist/assets
    new CopyWebpackPlugin({
      patterns: [
        {from: 'assets/', to: 'assets/'}
      ]
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'assets/', 
    //     to: 'assets/'
    //   }], {
    //     ignore: [],
    //     debug: 'debug',
    //     copyUnmodified: true
    //   }),

    // optimize all image file
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,

      // optipng: {
      //   optimizationLevel: 4
      // }
        
      // this way seems better on mac.
      pngquant: {
        verbose: true,
        quality: '80-90'
      }
    }),

    // copy html to dist and insert the js reference.
    new HtmlPlugin({
      file: path.join(__dirname, 'dist', 'index.html'),
      template: './index.html'
    })

  ]

}
