const sass = require('gulp-sass');

const server_config = require('./server_config');//服务器配置项
const webpack_config = require('./webpack_config');//webpack配置项

//全局配置
const config={
    server_config,
    sass_config:{outstyle:'compressed'},
    webpack_config
}

module.exports = config;