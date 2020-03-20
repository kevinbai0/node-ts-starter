const path = require("path")
const merge = require("webpack-merge")
const config = require("./webpack.config.js")

module.exports = merge(config, {
    devServer: {
        contentBase: path.join(__dirname, "examples"),
        compress: true,
        port: 9000
    }
})