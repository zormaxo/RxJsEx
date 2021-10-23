const path = require('path');

module.exports = {
  entry: [
    './src/app.ts',
    './src/12-subjcet-vs-observable.ts',
    "./src/9-switchMap.ts",
    "./src/13-debounceTime.ts",
    "./src/2-fromEvent.ts"   
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};