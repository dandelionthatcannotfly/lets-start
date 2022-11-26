:::warning
**JavaScript**：
1.增强页面动态效果(如:下拉菜单、图片轮播、信息滚动等)
2.实现页面与用户之间的实时、动态交互(如:用户注册、登陆验证等)
:::

---

:::danger
**变量名字可以任意取:**
1）必须以字母、下划线或美元符号开头，后面可以跟字母、下划线、美元符号和数字。如下:
正确:           
    mysum            
    _mychar         
    $numa1
错误:
  6num  //开头不能用数字
  %sum //开头不能用除(_ $)外特殊符号,如(%  + /等)
  sum+num //开头中间不能使用除(_ $)外特殊符号，如(%  + /等)

2）变量名区分大小写，如:A与a是两个不同变量。
3）不允许使用JavaScript关键字和保留字做变量名。
:::

---

![Screenshot_2022-10-20-19-01-36-757-edit_cn.com.open.mooc.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1666263735547-05ed21fc-d155-4842-985e-782e0bfa5311.jpeg#crop=0&crop=0&crop=1&crop=1&from=url&id=W4q2z&margin=%5Bobject%20Object%5D&name=Screenshot_2022-10-20-19-01-36-757-edit_cn.com.open.mooc.jpg&originHeight=1713&originWidth=1419&originalType=binary&ratio=1&rotation=0&showTitle=false&size=293939&status=done&style=none&title=)

---

```javascript
// + - * /
const strToInt = Number('thjdfijm')
const strToIntByParse = parseInt('1')
console.log(strToIntByParse)
console.log(1 + '1')
console.log(1 - '1')

// 原生类型
const a = 1;
// 包装类型
const aa = Number(1)

const b = (1 / 3).toFixed(2)
console.log(b)

// 逻辑运算
// 1.&&与
// 2. ||
const bb = undefined;
const aaa = bb || 5;
console.log('a', aaa)

// 只用===，包含了类型
// !=,==,!==,===
if (true !== 1) {
  console.log('aaa')
}

const people = {
  family: {
    brother: null,
    sister: {
      name: 'pjw'
    }
  }
}

// optional chainning
console.log(people?.family?.brother?.name)


// 流程控制
// if () {

// } else if () {

// } else {

// }

for(let i = 0; i < 5; i++) {
}

while(false) {

}

do {

} while(false)


 
switch(nameLong) {
  case 
  }
 default: {}
}

// JS没有函数重载
 
```

---

> JS基础数据类型：object    number    string     boolean      undefined      null     symbol
> - undefined既是数据类型，也是值；当用var或let声明了变量，但没有初始化时，就相当于给变量赋予了undefined。
> - null的类型是object，所有的引用类型的根对象是null。
> 
深浅拷贝问题：
> 基础数据类型和引用数据类型的区别： 
> - 引用数据类型在copy的时候是直接引用它的地址。引用类型，即对象类型可以添加各种各样的属性。
> 
所有的引用类型在默认的情况下JS复制时都是浅拷贝。
>        如何将它变成深拷贝？直接创建一个对象，如果有嵌套的引用类型，则需要递归的遍历它的属性。
> - 基础类型在copy时，是直接引用它的类型。且基础数据类型只有一个单独的值。


---

:::warning
 哈希表
![屏幕截图 2022-11-24 170808.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1669280999490-f3aefcb4-e1e2-4f74-94cf-946053a77337.jpeg#clientId=u1eaef1bd-a415-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u09728154&margin=%5Bobject%20Object%5D&name=%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-11-24%20170808.jpg&originHeight=718&originWidth=1233&originalType=binary&ratio=1&rotation=0&showTitle=false&size=54960&status=done&style=none&taskId=u4fc20e9a-9615-4185-9944-3a769cb35da&title=)
:::
 

---

队列的实现和栈一样：

- 数组
- 链表
> ![image.png](https://cdn.nlark.com/yuque/0/2022/png/29535083/1669282219882-7e7eaee4-6c43-480d-98a4-6e8a89d5ef67.png#clientId=uf4227994-93ef-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=614&id=u49d80097&margin=%5Bobject%20Object%5D&name=image.png&originHeight=768&originWidth=1373&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70673&status=done&style=none&taskId=u47afd052-a1c3-40c1-aabf-e9c28242a71&title=&width=1098.4)


---



