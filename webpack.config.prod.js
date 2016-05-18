var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: "./frontend/bookshare.jsx",
    output: {
        path: "./app/assets/javascripts",
        filename: "bundle.js"
    },
    resolve: {
         extensions: ["", ".js", ".jsx"]
         },
    plugins:[
      new webpack.DefinePlugin({
        'process.env':{
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress:{
          warnings: true
        }
      })
    ],
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react']
            }
        }
        ]
    },
    devtool: 'source-map'
};
