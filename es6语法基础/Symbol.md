## Symbol

确保每个属性都是唯一的

实例：定义常量

```
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 == s2); //false
console.log(s1 == s1); //ture

```