# SAAS平台工程
## 简介
* 后端框架:springboot
* 前端语言: vue2
* 前端打包工具:webpack
* 开发工具:Visual Studio Code(开发推荐) +eclipse(java,也可以用spring source) 

## 项目导入
* 通过eclipse 以maven的形式导入

## 工程启动方式
 1. 工程启动配置路径src/mian/resources/config/application.properties
 2. src/main/resources/public 为webapp目录
 3. 找到 com.zhonghui.saas目录下的App.java，直接 右键run as java Application 默认端口是8030
 
## 前端项目工程初始化方式

* 进入src/main/resources/public目录  npm install
* 编译打包前端资源 npm run build (生成环境跟开发环境暂时共用一个打包脚本)


## 若安装node-sass失败 请用cnpm install或者手动下载node-sass安装文件，本地执行

* npm install node-sass --save-dev --sass-binary-site=http://localhost:8030/ --registry=https://registry.npm.taobao.org