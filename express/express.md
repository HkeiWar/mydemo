### Express 简介

Express 是一个简洁而灵活的 node.js Web应用框架, 提供了一系列强大特性帮助你创建各种 Web 应用，和丰富的 HTTP 工具。
使用 Express 可以快速地搭建一个完整功能的网站，它有一套健壮的特性，可用于开发单页、多页和混合Web应用。

### 安装 Express
express 是 Node.js 上最流行的 Web 开发框架，正如他的名字一样，使用它我们可以快速的开发一个 Web 应用。我们用 express 来搭建我们的博客，打开命令行，输入：
$ npm install -g express-generator
安装 express 命令行工具，使用它我们可以初始化一个 express 项目。
### 安装jade

通过 npm安装:
npm install -g jade

### Express创建并运行node项目（Jade和EJS模版引擎）
 1、创建Node项目

[Jade模板]

> express nodeJade

express创建项目若不显示指定模板，默认使用Jade，以下写法都可以：

express -jade nodeJade

express -view=jade nodeJade

express --view=jade nodeJade （官方推荐写法）

浏览器输入 localhost:3000

### 工程结构

app.js：启动文件，或者说入口文件

package.json：存储着工程的信息及模块依赖，当在 dependencies 中添加依赖的模块时，运行 npm install ，npm 会检查当前目录下的 package.json，并自动安装所有指定的模块

node_modules：存放 package.json 中安装的模块，当你在 package.json 添加依赖的模块并安装后，存放在这个文件夹下

public：存放 image、css、js 等文件

routes：存放路由文件

views：存放视图文件或者说模版文件

bin：存放可执行文件

### 路由跳转
```
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.render('test', { message: 'Express',time:new Date(new Date().getTime()+ (1000 * 60 * 60 * 2)) });
});
```

