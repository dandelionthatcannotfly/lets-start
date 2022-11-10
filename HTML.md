标签类型：

1. 展示类/显示类

<div>标题</div>
<div>小标题</div>
<span>正文</span> 

2. 输入类
- canvas、svg通常不用，太过复杂。

![](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1668011329943-1bbe0316-01b1-4451-a21e-6a31ae432f40.jpeg)

---

HTML5结构：
<!DOCTYPE html> -----文档类声明
<html>放在文档最前面标志文档开始
</html>放在文档最后面标志文档结束	

---

![屏幕截图 2022-11-10 001456.png](https://cdn.nlark.com/yuque/0/2022/png/29535083/1668011590898-6aae8c5f-0b2c-42f6-b53d-dedaae5766b4.png#clientId=u55f472ed-9224-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u36d044fa&margin=%5Bobject%20Object%5D&name=%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-11-10%20001456.png&originHeight=421&originWidth=762&originalType=binary&ratio=1&rotation=0&showTitle=false&size=49889&status=done&style=none&taskId=u399e3129-89d7-4ba7-8502-61296c04c7a&title=)

---

语义化的作用：

1. 让标签更加可读
2. 让文章分析更加便利
:::success
//HTML：超文本标记语言
//HTML语义化：用恰当的标签来标记内容。
HTML语义化的原因:
即使在没有CSS样式的条件下，也能很好地呈现出内容结构、代码结构；
语义化HTML会使HTML结构变的清晰，有利于维护代码和添加样式；
方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
提升搜索引擎优化(SEO)的效果。和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
通常语义化HTML会使代码变的更少，使页面加载更快。
:::

---

![](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1668007856041-24779a74-e42e-4c96-8387-24bca56aeec9.jpeg)

---

```html
<!DOCTYPE html>          声明
<html>
  <head>
    <!--样式-->
    <style>           
      .login{
      border:1pxsolid grey;
      }
      .login:hover{
      cursor:pointer;
      }
    </style>
  </head>
  <body>
    <spanclass="login">登录</span>
      <!--输入-->
      <div>用户名:<input/></div>          
      <div>密码:<input/></div>
      <div>
        <!--下拉选框-->
        <select>
          <option>老师</option>            
          <option>学生</option>
          <option>校外人员</option>
        </select>
      </div>
      <div>  
        <!--多选-->
        <inputtype="checkbox" id="checkbox1" />
          <labelfor="checkbox1">选不选都只有这一个</label>
            <inputtype="checkbox" id="checkbox2" />
              <labelfor="checkbox2">谁说得，我就是第二个</label>
  </div>
  <div>          
    <!--单选-->
  <inputtype="radio" id="r1" name="contact" value="email" />
  <labelfor="r1">Email</label>
  <inputtype="radio" id="r1" name="contact" value="phone" />
  <labelfor="r2">Phone</label>
  <inputtype="radio" id="r1" name="contact" value="mail" />
  <labelfor="r3">Mail</label>
  </div>
  <div><button>登录</button></div>
  </body>
  </html>
```
一些例子：
:::info
1)  <!DOCTYPE html> 是一个声明，表示该文档是由 HTML5 进行编写的。
2)   <!--...--> 用来在源文档中插入注释。注释不会在浏览器中显示。
3)   <br>标签用于插入一个简单的换行符。
4)   <title>用于定义文档的标题，浏览器中不会显示(必须位于head内部)。

- <h1>-<h6>定义标题（h1最大，h6最小，不能改变同一行字体的大小）。

5)   <meta>用于描述元信息、元数据标签。
                <meta charset="UTF-8">
6)    <a> 标签用于定义超链接，超链接可以让用户从一个网页跳转到另一个网页。
       <a> 标签最重要的属性是 href 属性，它指定了链接目标的 URL。
         在浏览器中，通常超链接的默认外观是：
                        ![image.png](https://cdn.nlark.com/yuque/0/2022/png/29535083/1668008987087-6bbfe595-34f4-46df-a21e-fb73e21a06e7.png#clientId=u55f472ed-9224-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=ua695f77a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=73&originWidth=309&originalType=url&ratio=1&rotation=0&showTitle=false&size=20641&status=done&style=none&taskId=u2b46d3b8-a33a-42da-a3f3-5de50d3eab0&title=)
7)<video>标签定义视频，比如电影片段或其他视频流。[https://main.eagleslab.com/html5/video.html](https://main.eagleslab.com/html5/video.html)
8)<lang>标签规定文本语言。
:::

---

//div背景定义参数：
background 设置元素的背景参数，其中属性依次为 background-color(背景色) | background-image(背景图) | background-repeat(重复方式) | background-attachment(背景图像固定还是滚动) | background-position(背景图像位置)


[https://www.yuque.com/docs/share/956c1af8-3fc6-4f09-bc85-aa68a2f22590?#](https://www.yuque.com/docs/share/956c1af8-3fc6-4f09-bc85-aa68a2f22590?#) 《HTML标签（标记语言）》


