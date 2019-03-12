## moment模块
JavaScript 日期处理类库
### 安装moment
```
npm install -save moment
```

### 常用方法
```
var moment = require('moment'); //导入模块
```
日期格式化
```
moment().format('MMMM Do YYYY, h:mm:ss a'); // 三月 12日 2019, 9:49:56 上午
moment().format('dddd');                    // 星期二
moment().format("MMM Do YY");               // 3月 12日 19
moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
moment().format();                          // 2019-03-12T09:49:56+08:00
```
相对时间
```
moment("20111031", "YYYYMMDD").fromNow(); // 7 年前
moment("20120620", "YYYYMMDD").fromNow(); // 7 年前
moment().startOf('day').fromNow();        // 10 小时前
moment().endOf('day').fromNow();          // 14 小时内
moment().startOf('hour').fromNow();       // 1 小时前
```
日历时间
```
moment().subtract(10, 'days').calendar(); // 2019年3月2日
moment().subtract(6, 'days').calendar();  // 上周三上午9点49
moment().subtract(3, 'days').calendar();  // 上周六上午9点49
moment().subtract(1, 'days').calendar();  // 昨天上午9点49分
moment().calendar();                      // 今天上午9点49分
moment().add(1, 'days').calendar();       // 明天上午9点49分
moment().add(3, 'days').calendar();       // 本周五上午9点49
moment().add(10, 'days').calendar();      // 2019年3月22日
```
多语言支持
```
moment().format('L');    // 2019-03-12
moment().format('l');    // 2019-03-12
moment().format('LL');   // 2019年3月12日
moment().format('ll');   // 2019年3月12日
moment().format('LLL');  // 2019年3月12日上午9点49分
moment().format('lll');  // 2019年3月12日上午9点49分
moment().format('LLLL'); // 2019年3月12日星期二上午9点49分
moment().format('llll'); // 2019年3月12日星期二上午9点49分
```