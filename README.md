# Vue 3 + Typescript + Vite

## issues

1. 如果找不到 node 模块，`yarn add @types/node --save-dev`

2. vue-tsc 检测 node_modules 报错，配置 "skipLibCheck": true

3. vite-plugin-mock, 根目录创建 mock 目录，安装 cross-env 环境变量

## esmodule

1. 请求方式，不需要每次都打包
2. 按需加载

预打包 模块替换成相对地址
vite 服务器把 vue 文件转为 js 文件
