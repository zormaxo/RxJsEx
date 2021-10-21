npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev babel-loader @babel/core
npm install @babel/preset-env --save-dev
npm install rxjs

create src directory and inside it app.js
create webpack.config.js

const path = require("path");

module.exports={
    entry : "./src/app.js",
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }, 
  output:{
      filename : "app.bundle.js",
      path: path.resolve(__dirname, "dist")
  }
}

create babel.config.json

{
  "presets": ["@babel/preset-env"]
}

open package.json
under scripts add:
    "build": "webpack --mode development",
    "watch": "webpack -w --mode development"
	

npm run watch
create index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script src="./dist/app.bundle.js"></script>
</body>
</html>