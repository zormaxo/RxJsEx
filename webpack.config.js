const path = require('path');

module.exports = {
  entry: [
    './src/app.ts',
    "./src/1-createOwnObservables.ts",
    "./src/2-fromEvent.ts",
    "./src/9-switchMap.ts",
    "./src/10-mergeMap.ts",
    './src/12-subjcet-vs-observable.ts',
    "./src/13-debounceTime.ts",
    "./src/14-catchError.ts",
  ],
  devtool: 'inline-source-map', //There were warnings on the console so I added this to prevent getting warnings. I don't know what this is excatly
  module: {},
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};