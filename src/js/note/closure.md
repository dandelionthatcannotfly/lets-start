**闭包**（closure）是一个函数以及其捆绑的周边环境状态（**lexical environment**，**词法环境**）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
>  特点：
> - 让外部访问函数内部变量成为可能；
> - 局部变量会常驻在内存中；
> - 可以避免使用全局变量，防止全局变量污染；
> - 会造成内存泄漏（有一块内存空间被长期占用，而不被释放）  


---

:::warning
/闭包找到的是同一地址中父级函数中对应变量最终的值。

- 函数嵌套
- 内部函数引用了外部函数的变量或函数
:::
```javascript
function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() { // displayName() 是内部函数，一个闭包
      alert(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();

```
```javascript
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
        alert(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();

```

---

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
