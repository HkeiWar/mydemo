## MongoDB 数据库

### 简介
MongoDB 旨在为WEB应用提供可扩展的高性能数据存储解决方案。

MongoDB 将数据存储为一个文档，数据结构由键值(key=>value)对组成。MongoDB 文档类似于 JSON 对象。字段值可以包含其他文档，数组及文档数组。

### 安装启动
启动服务器
```
mongod --dbpath D:/mongodb/data

```


### 常用命令
```
show dbs // 显示所有数据库
use admin // 切换数据库/使用数据库/没有就创建
db.getName() // 获取当前使用的数据库
db.stats() // 获取当前数据库信息
db.getCollectionNames() // 获取数据库所有集合
db.createCollection("test") // 创建集合
db.test.drop() //删除集合
db.test.find() // 集合查询
db.test.insert({ "userId": 1, "userName": "root", "password": "123456" }) // 添加数据
db.test.update({"userId":1},{$set:{"userName:"test"}}) //修改数据
db.test.remove({"userId":1})  //删除数据
```