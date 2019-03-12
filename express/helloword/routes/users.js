var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/************** 定义模型Model **************/
const User = mongoose.model('user', new mongoose.Schema({
  userId: { type: Number, require: true },
  userName: { type: String, require: true },
  password: { type: String, require: true }
}))

mongoose.connect('mongodb://localhost:27017/books').then(() => {
  console.log('数据库连接成功！')
}).catch(err => {
  console.log(err)
})

/**
 * 获取所有数据
 */
router.get('/users', function (req, res, next) {
  User.find({}, function (err, doc) {
    res.json({status:0,msg:"查询成功！",data:doc})
  })
});

/**
 * 获取单条数据
 */
router.get('/user/:id', function (req, res, next) {
  User.findOne({userId:req.params.id}, function (err, doc) {
    res.json({status:0,msg:"查询成功！",data:doc})
  })
});

/**
 * 删除数据
 */
router.delete('/user/:id', function (req, res, next) {
  let result = {
    status : 0,
    msg : "操作成功！"
  }
  User.remove({userId:req.params.id}, function (err, doc) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err);
      result.status = 1;
      result.msg = "操作失败！";
      res.json(result)
    }
  });
});

/**
 * 修改数据
 */
router.put('/user', function (req, res, next) {
  let result = {
    status : 0,
    msg : "操作成功！"
  }
  console.log(req.body)
  User.update({userName:"test"},{$set:{userId:1}}, function (err, doc) {
    if (!err) {
      console.log(doc)
      res.json(result)
    } else {
      console.log(err);
      result.status = 1;
      result.msg = "操作失败！";
      res.json(result)
    }
  });
});

/**
 * 添加数据
 */
router.post('/user', function (req, res, next) {
  let result = {
    status : 0,
    msg : "操作成功！"
  }
  User.create(req.body, function (err, doc) {
    if (!err) {
      res.json(result)
    } else {
      console.log(err);
      result.status = 1;
      result.msg = "操作失败！";
      res.json(result)
    }
  });
});

module.exports = router;
