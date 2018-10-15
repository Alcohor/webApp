const gulp = require('gulp');//gulp引入
const server = require('gulp-webserver');//服务器引入
const sass   = require('gulp-sass');//sass编译器引入
const webpack = require('webpack-stream');//webpack打包工具引入
const watch = require('gulp-watch');//gulp文件监听
const del = require('del');//删除组件引入

const config = require('./config');// 全局的配置文件

// server_config 服务配置
const { server_config, sass_config, webpack_config } = config;

// 开启热更新服务器
gulp.task('server', () => {
    return gulp.src('./dist')
            .pipe(server(server_config))
})

// 输出静态文件
gulp.task('copy:static', () => {
    return gulp.src('./src/static/**/*.*')
            .pipe(gulp.dest('./dist/static'));
})

// 输出html页面
gulp.task('copy:html', () => {
    return gulp.src('./src/**/*.html')
            .pipe(gulp.dest('./dist/'));
})

// 处理scss
gulp.task('compile:scss', () => {
    console.log('handle scss')
    return gulp.src('./src/stylesheets/*.scss')
            .pipe(sass(sass_config).on('error', sass.logError))
            .pipe(gulp.dest('./dist/stylesheets'));
})

// 模块化打包js
gulp.task('compile:js', () => {
    return gulp.src('./src/javascripts/**/*.js')
        .pipe(webpack(webpack_config))
        .pipe(gulp.dest('./dist/javascripts'))
})

//文件监听
gulp.task('watch', () => {
    gulp.watch('./src/**/*.html', ['copy:html']);//html文件监听
    gulp.watch('./src/javascripts/**/*', ['compile:js']);//js文件监听
    gulp.watch('./src/stylesheets/**/*.scss', ['compile:scss']);//scss文件监听
    gulp.watch('./src/static', ['copy:static']);//静态文件监听

    watch('src/static', (v) => { // 当src/static中文件变化后执行
        if ( v.event === 'unlink' ) { // 如果文件删除了
            let _path = v.history[0].replace('\src', '\dist'); // 要删除的路径
            del(_path);// 删除dist中的文件
        }else {
            gulp.start(['copy:static'])
        }
    })
})


// 默认任务
gulp.task('default', ['copy:static', 'copy:html', 'compile:scss', 'compile:js', 'server', 'watch'], () => {
    console.log('Everything is done ...')
})