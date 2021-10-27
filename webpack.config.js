const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    // 编译模式：evelopment开发模式， production生产模式
    mode: 'development',
    // 打包入口文件
    entry: path.join(__dirname, './src/main.js'),
    // 打包输出文件
    output: {
        // 输出文件的存放路径
        path: path.join(__dirname, './dist'),
        // 输出文件名
        filename: 'build.js'
    },
    module: {
        rules: [
            // .vue文件 加载器配置
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            // css loader配置
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ]
            },
            // less loader配置
            {
                test: /\.less$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'less-loader' }
                ]
            },
            // scss loader配置
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // .js loader配置
            {
                test: /\.js$/,
                // 排除项，不需要处理node_modules中的js文件
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // 图片等 loader配置
            {
                test: '/\.jpg|png|svg|gif|bmp|ttf|eot|woff|woff2$/',
                // test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 16941,
                    name: '[name].[contenthash:8].[ext]',
                    outputPath: wrapBuildDir('images'),
                    esModule: false
                }
            }
        ]
    },
    plugins: [
        // 通过参数配置
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            // 压缩html代码
            minify: {
                // 移除空格
                collapseWhitespace: true,
                // 移除注释
                removeComments: true,
            },
        }),
    ]
}