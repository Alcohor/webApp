const webpack_config={
    // mode:'production',
    mode : 'development',
    entry:{
        app:'./src/javascripts/app.js',
        jobInfo_controller:'./src/javascripts/controllers/jobInfo_controller.js'//入口文件
    },
    output:{
        filename:'[name].js'//打包后输出
    },
    module:{
        rules:[
            {   test: /\.html$/, // 查找被当作模块引入到js中的后缀名是.html的文件
                use: 'string-loader' // 利用string-loader来处理它
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, // 代表不包括哪些
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    }
}
module.exports = webpack_config;