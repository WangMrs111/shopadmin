const {
  defineConfig
} = require('@vue/cli-service')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const {
  ElementPlusResolver
} = require('unplugin-vue-components/resolvers')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

// module.exports = defineConfig({
//     transpileDependencies: true,
//     //方式一：直接通过cli提供给我们的选项来配置
//     publicPath: './',  //配置应用程序部署的子项目
//     outputDir:'build',
//     devServer:{
//         port:8888, // 设置端口号
//         open:true, //是否自动打开浏览器并运行
//         host:'localhost', //设置主机名
//         lintOnSave:false //关闭eslint   关闭严格模式
//     },
//     //outputDir: './bulid'    //修改输出的文件夹
//     //方式二：通过configureWebpack修改webpack的配置
//     // configureWebpack: {
//     //     resolve: {
//     //         alias: {
//     //             '@': './src'
//     //         }
//     //     },
//         // configureWebpack:(config)=>{
//         //     config.resolve.alias ={
//         //         '@':path.resolve(__dirname,'src/components')
//         //     }
//         // }
//         // plugins: [
//         //     new WindiCSSWebpackPlugin(),
//         //     AutoImport({
//         //         resolvers: [ElementPlusResolver()]
//         //     }),
//         //     Components({
//         //         resolvers: [ElementPlusResolver()]
//         //     })
//         // ]
//     },
//     //方式三：支持链式调用
//     // chainWebpack:(config)=>{
//     //     config.resolve.alias
//     //        .set('@',path.resolve(__dirname,'src'))
//     //        .set('view',path.resolve(__dirname,'src/views'))
//     // }

// })
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'build',
  devServer: {
    port: 8888, // 设置端口号
    open: true, //是否自动打开浏览器并运行
    host: 'localhost', //设置主机名

  },
  configureWebpack: {
    plugins: [
      new WindiCSSWebpackPlugin(),

      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  },
  lintOnSave: false //关闭eslint   关闭严格模式
})
//// 4.0 5.0
// 1. 处理跨域
// 2. 文件是干嘛的?
// 3. webpack --- 打包构建 --- nodejs
// 4. 同源策略? 域名、 协议、端口号  同源   跨域
// 跨域 只存在浏览器端
// 后端 没有
// nodejs   ---- 服务端  ---    第三方接口的数据  -》 接口
// vue-cli webpack5.0
// 不想用它
// 9999
// webpack   非常     vite
// process.env.NODE_ENV development production
// development 开发环境 开发模式
// production 生产环境 线上环境
