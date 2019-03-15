npm install 出现npm ERR! cb() never called!
解决方法：

首先要以管理员模式打开cmd清除你的npm缓存 : npm cache clean -f
```
npm cache clean -f
```


npm install 

```
Error: EPERM: operation not permitted, unlink 'D:\Repository\fos\myCloud4\fos\node_modules\.staging\node-forge-bae7fefe\dist\forge.min.js'
{ Error: EPERM: operation not permitted, unlink 'D:\Repository\fos\myCloud4\fos\node_modules\.staging\node-forge-bae7fefe\dist\forge.min.js'
cause:
{ Error: EPERM: operation not permitted, unlink 'D:\Repository\fos\myCloud4\fos\node_modules\.staging\node-forge-bae7fefe\dist\forge.min.js'
    errno: -4048,
    code: 'EPERM',
    syscall: 'unlink',
    path: 'D:\\Repository\\fos\\myCloud4\\fos\\node_modules\\.staging\\node-forge-bae7fefe\\dist\\forge.min.js' },
    stack: 'Error: EPERM: operation not permitted, unlink \'D:\\Repository\\fos\\myCloud4\\fos\\node_modules\\.staging\\node-forge-bae7fefe\\dist\\forge.min.js\'',
    errno: -4048,
    code: 'EPERM',
    syscall: 'unlink',
    path: 'D:\\Repository\\fos\\myCloud4\\fos\\node_modules\\.staging\\node-forge-bae7fefe\\dist\\forge.min.js',
    parent: 'fos' }
```

C:\Users\Administrator\AppData\Roaming\npm-cache 清空，删除node_modules，然后重新install，或者添加新的包都可以了