
const proxy = require('http-proxy-middleware');

// 开发服务器的配置
const server_config = {
    host: 'localhost',
    port: 8080,
    livereload: true,
    middleware: [
        proxy('/lagou', { // /lagou 这个是判断依据 当我们请求'http://localhost:8080/quanzhi/abc'的时候，这个代理就生效了
            target: 'https://m.quanzhi.com',// 配置目标服务器 当前服务器回去请求 https://m.quanzhi.com
            changeOrigin: true,
            pathRewrite: { // https://m.quanzhi.com
                '^/quanzhi': ''
            }
        }),
        proxy('/api', {//moke数据
            target: 'http://localhost:3000',
            changeOrigin: true,
        })
    ]
    
}

module.exports = server_config