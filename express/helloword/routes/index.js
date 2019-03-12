var express = require('express');
var router = express.Router();
var moment = require('moment');
var pcasv = require('../public/javascripts/pcasv')

/* GET home page. */
router.get('/', function (req, res, next) {
  let date = { title: 'moment日期格式化时间', time: moment().format('YYYY-MM-DD HH:mm:ss') }
  res.json(date);
});

/* GET home page. */
router.get('/addres', function (req, res, next) {
  let pro = req.query.pro || ""
  let result = {
    status : 0,
    msg : "查询成功！",
    data:{}
  }
  let array = []
  pcasv.forEach(element => {
    if (element.value === pro || element.label.indexOf(pro) > 0) {
      array.push(element)
    }
  });
  if(array.length > 0){
    result.data = array;
  }
  res.json(result);
});

/* GET home page. */
router.get('/test', function (req, res, next) {
  res.json('test', { message: 'Express', time: new Date(new Date().getTime() + (1000 * 60 * 60 * 2)) });
});

module.exports = router;
