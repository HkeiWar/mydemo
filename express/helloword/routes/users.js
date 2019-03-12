var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.createConnection('mongodb://localhost:27017/books')
var Schema = mongoose.Schema;
// 为这次连接绑定事件
const db = mongoose.connection
db.once('error', () => console.log('Mongo connection error'))
db.once('open', () => console.log('Mongo connection successed'))
/************** 定义模式loginSchema **************/
const person = new Schema({
  userId: Number,
  userName: String,
  password: String
});
 
/************** 定义模型Model **************/
const user = mongoose.model('user', person)

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({}, function(err, result) { if (err) { console.log(err); } else { console.log("成功"); res.json(result);} })
  res.send('respond with a resource');
});

module.exports = router;
