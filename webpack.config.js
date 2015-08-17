var path = require('path');
    module.exports = {
        entry: './src/app.es6.js',
        output: {
            path: __dirname + "/js",
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                {
                  test: path.join(__dirname, 'src'),
                  loader: 'babel-loader'
                }
            ]
        }
    };
