# Vue框架
### vue项目的搭建

搭建vue环境：

1、安装node.js 查看版本 node -v

2.安装vue-cli脚手架构建工具

在命令行中运行命令 npm install -g vue-cli ，然后等待安装完成。 
我们需要准备的环境和工具都准备好了，接下来就开始使用vue-cli来构建项目。

3.用vue-cli构建项目

要创建项目，首先我们要选定目录，然后再命令行中把目录转到选定的目录。
在这里，我选择桌面来存放新建的项目，则我们需要先把目录cd到桌面
在桌面目录下，
在命令行中运行命令 vue init webpack helloword 。解释一下这个命令，这个命令的意思是初始化一个项目，
其中webpack是构建工具，也就是整个项目是基于webpack的。
其中helloword是整个项目文件夹的名称，
这个文件夹会自动生成在你指定的目录中（我的实例中，会在桌面生成该文件夹）.

4.安装项目所需的依赖 
要安装依赖包，首先cd到项目文件夹（helloword文件夹），然后运行命令 npm install ，等待安装。
安装完成之后，会在我们的项目目录helloword文件夹中多出一个node_modules文件夹，这里边就是我们项目需要的依赖包资源。

安装完依赖包之后，就可以运行整个项目了。

5.运行项目 
在项目目录中，运行命令 npm run dev ，会用热加载的方式运行我们的应用，热加载可以让我们在修改完代码后不用手动刷新浏览器就能实时看到修改后的效果。 
这里简单介绍下 npm run dev 命令，其中的“run”对应的是package.json文件中，scripts字段中的dev，也就是 node build/dev-server.js命令的一个快捷方式。

项目运行成功后，在浏览器打开localhost:8080