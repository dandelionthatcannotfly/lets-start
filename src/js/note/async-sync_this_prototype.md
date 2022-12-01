
:::tips
javascript语言是单线程机制。所谓单线程就是按次序执行，执行完一个任务再执行下一个。对于浏览器来说，也就是无法在渲染页面的同时执行代码。于是，所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。
:::
> - 同步，可以理解为在执行完一个函数或方法之后，一直等待系统返回值或消息，这时程序是出于阻塞的，只有接收到返回的值或消息后才往下执行其他的命令。  同步，就是实时处理（如打电话）。
> - 异步，执行完函数或方法后，不必阻塞性地等待返回值或消息，只需要向系统委托一个异步过程，那么当系统接收到返回值或消息时，系统会自动触发委托的异步过程，从而完成一个完整的流程。 异步，就是分时处理（如收发短信）。
> - 两者要求不一样：“同步通信”的通信双方必须先建立同步，即双方的时钟要调整到同一个频率。异步通信发送端不需要在发送一帧之前和接收端进行协调（不需要先进行比特同步）。
> - 两者特点不一样：异步通信的好处是通信设备简单、便宜，但传输效率较低（因为开始位和停止位的开销所占比例较大）。同步各结点的时钟之间允许有微小的误差，这个时候会采用其他措施实现同步传输。
> - 对于写程序，同步往往会阻塞，没有数据过来，就等着，异步则不会阻塞，没数据来我干别的事，有数据来去处理这些数据。同步在一定程度上可以看做是单线程，这个线程请求一个方法后就待这个方法给他回复，否则他不往下执行（死心眼）。 异步在一定程度上可以看做是多线程的，请求一个方法后，就不管了，继续执行其他的方法。


---

![image.png](https://cdn.nlark.com/yuque/0/2022/png/29535083/1669817411506-05fa512f-41a5-4234-96f6-5f7ce715c765.png#clientId=ua1abf1d0-9f15-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=538&id=ub3cf42a2&margin=%5Bobject%20Object%5D&name=image.png&originHeight=672&originWidth=1206&originalType=binary&ratio=1&rotation=0&showTitle=false&size=52691&status=done&style=none&taskId=u8c024162-8f76-4038-8da2-834ee28f4d8&title=&width=964.8)

---

:::info
thit指向问题：	

- 与其他语言相比，**函数的 this 关键字**在 JavaScript 中的表现略有不同，此外，在[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)和非严格模式之间也会有一些差别。

       JS中的严格模式：'use strict'

- this在运行时绑定，调用方式决定了this的值，且this不能在执行期间被赋值；
- this在每次函数被调用时，它的值也可能会不同。
-  Java与C中的this打印是静态的，JS中的不太稳定
- 解决this问题：

       1.）箭头函数
         回调函数能用箭头函数就要用箭头；
       2.）bind方法
网址1：[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/this)
网址2：[https://juejin.cn/post/7128233572380442660](https://juejin.cn/post/7128233572380442660) 
:::

---

> 作用域和作用域链：
> - var的变量提升，即可以先使用函数，再声明函数。 var少用。
> - 块级作用域一定要有constant，let关键字或者有（），{   }
> - 暂时性死区:在代码块内，使用let和const命令声明变量之前，该变量都是不可用的，语法上被称为暂时性死区。
> - 块级作用域中不能变量提升


---

-  作用域链是静态的。
- 原型和原型链：

   原型：
①所有引用类型都有一个__proto__(隐式原型)属性，属性值是一个普通的对象
②所有函数都有一个prototype(原型)属性，属性值是一个普通的对象
③所有引用类型的__proto__属性指向它构造函数的prototype
```javascript
var a = [1,2,3];
a.__proto__ === Array.prototype; // true
```

---

![屏幕截图 2022-12-01 203434.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1669898125726-73842383-3b70-4baf-9f1f-f27c2c048c23.jpeg#clientId=u060dddd1-6d70-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u5b00bc55&margin=%5Bobject%20Object%5D&name=%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-12-01%20203434.jpg&originHeight=546&originWidth=871&originalType=binary&ratio=1&rotation=0&showTitle=false&size=110419&status=done&style=none&taskId=u0b3ce763-9338-4ba2-a46a-7cfeaf384b7&title=)
```javascript
//构造函数
function tset(){

}

const obj=new test();
console.log(obj)


function people(){
    this.name='sj';
    this.age=123;
}

//constructor->object
const person=new people();


console.log(people.prototype.constructor === people)

const parent = {}
 
```

- 原型继承
- 手动更改普通对象的_proto_指向
- 什么是原型链
- 构造函数是使用了new关键字的函数，用来创建对象，所有函数都是Function()的实例
- 原型对象是用来存放实例对象的公有属性和公有方法的一个公共对象，所有原型对象都是Object()的实例
- 原型链又叫隐式原型链，是由__proto__属性串联起来，原型链的尽头是Object.prototype

 
```javascript
function getLeftCash(backInfo){
    //平台数据获取
    const{name:backName,site}=backInfo;
    const leftCash=mockCash(backName,site);
    backInfo.callback(leftCash)
}

function mockCash(name,site){
    //查询
    return 100;
}
```
 

---

:::warning
面向对象思想：
1.封装：属性，方法体现的是接口
2.继承
3.多肽
:::

