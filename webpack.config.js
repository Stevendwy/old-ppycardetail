var webpack = require('webpack')

module.exports = {
    entry: "./js/index.js",
    output: {
        path: "./js/",
        filename: "cardetail.js"
    },
    
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    
    plugins:[
   	 new webpack.DefinePlugin({
   	   'process.env':{
   	     NODE_ENV: JSON.stringify('production')
   	   }
   	 }),
   	 new webpack.optimize.UglifyJsPlugin()
   	]
}