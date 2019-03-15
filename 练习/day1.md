## 1、查询数组里的一个数据
### 对象的创建
在 JavaScript中，几乎所有的事物都是对象。

对象的创建 使用{}创建一个对象 属于字面量对象

```
let obj = {name:"test",age:18}
```

对象属性的访问 通过点的方式
```
person.name;
```

实例1：创建对象   
Js代码
```
let person = {name:"Hello",age:18}
console.log(person.name)  //控制台输出Hello
console.log(person.age)  //控制台输出18
```

### 数组的操作
数组的创建 有两种方式 通过[]创建和new Array();
```
let array = []; //常用方式
array[0] = "Saab";
array[1] = "Volvo";
array[2] = "BMW";
var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";
```

实例2：数组存储对象
```
let array = [
    {
        name:"h1",
        age:18
    },
    {
        name:"h2",
        age:16
    },
    {
        name:"h3",
        age:26
    }]
for(let index = 0; index < array.lenght; index++){
    console.log(array[index].age); // 控制台输出数组的对象里每个年龄
}
```