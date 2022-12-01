:::info
命令1.0
1)GIT检测的是变化；
2)Cd
3)Touch
4)..代表前面的目录  ../../../
5).当前目录
6）Clear
7）添加：git add 文件名
//通过命令行判断文件是否在暂存区。
![QQ图片20221105221643.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1669886776383-9f9267cb-668a-477f-96d5-b05129f6f421.jpeg#clientId=ufc5aa130-092f-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u3afa3f0e&margin=%5Bobject%20Object%5D&name=QQ%E5%9B%BE%E7%89%8720221105221643.jpg&originHeight=409&originWidth=1046&originalType=binary&ratio=1&rotation=0&showTitle=false&size=40443&status=done&style=none&taskId=u382010e1-f69e-4e30-b3c9-a37a077bac0&title=)

:::

---

> .git的副作用：会覆盖掉原来的文件夹。
> （只适合初始化）


---

:::warning
没有副作用的命令：git status
(查看状态，只读的命令)
:::

---

> 如何生成一个版本
> git commit -m"这是我的第一次提交"


---

:::info
提交到远端仓库
git remote
push
fetch


再次上传
git add .
git commit -m"first commit"
git push
git checkout
:::

---

:::success
基本的linux命令2.0：
1）cd 进入某个目录
2）pwd 显示当前目录路径
3）ls(ll) 列出当前目录的文件 ll就是ls -l，列出详细信息
4）touch 新建一个文件
5）rm 删除要给文件，加上-rf，就是强制删除目录
6）mkdir 新建一个目录
7）mv 移动文件，或者是更改文件名称，mv index.html ./aa，这就是将index.html移动到./aa目录下。
mv index.html ./aa/bb.html，这是就是将index.html移动到./aa目录下并改名为bb.html
8）reset 重新初始化终端/清屏
9）clear 清屏
10）history 查看命令历史
11）help 帮助
12）#代表注释
13）cat 显示文件内容
:::

---

:::tips
基本知识：
使用远端仓库时会有多个协议可选择，使用https不仅仅速度慢，而且每次push都要输入口令。
:::

---

:::tips
GIT文件的四种状态：

- Untracked: 未跟踪, 此文件在文件夹中, 但并没有加入到git库, 不参与版本控制. 通过git add 状态变为Staged.
- Unmodify: 文件已经入库, 未修改, 即版本库中的文件快照内容与文件夹中完全一致. 这种类型的文件有两种去处, 如果它被修改, 而变为Modified. 如果使用git rm移出版本库, 则成为Untracked文件
- Modified: 文件已修改, 仅仅是修改, 并没有进行其他的操作. 这个文件也有两个去处, 通过git add可进入暂存staged状态, 使用git checkout 则丢弃修改过, 返回到unmodify状态, 这个git checkout即从库中取出文件, 覆盖当前修改
- Staged: 暂存状态. 执行git commit则将修改同步到库中, 这时库中的文件和本地文件又变为一致, 文件为Unmodify状态. 执行git reset HEAD filename取消暂存, 文件状态为Modified。
:::
![QQ图片20221201173714.png](https://cdn.nlark.com/yuque/0/2022/png/29535083/1669887567117-b97fa0b0-e897-4a06-b73b-b3234055515f.png#clientId=ufc5aa130-092f-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u13b6f038&margin=%5Bobject%20Object%5D&name=QQ%E5%9B%BE%E7%89%8720221201173714.png&originHeight=330&originWidth=800&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46080&status=done&style=none&taskId=u769ea127-73fa-495c-9061-d12dd6bde53&title=)

---

:::info
 init && clone：
git init 在当前目录新建一个仓库
git init [project-name] 在一个目录下新建本地仓库
git clone [url] 克隆一个远程仓库
:::

---

> git push错误failed to push some refs to的解决：
> ![QQ图片20221201174437.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1669887893911-45da3118-8e64-4fee-a78c-8d2fdf3a0804.jpeg#clientId=ufc5aa130-092f-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=uf20afc9c&margin=%5Bobject%20Object%5D&name=QQ%E5%9B%BE%E7%89%8720221201174437.jpg&originHeight=7719&originWidth=1440&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1529378&status=done&style=none&taskId=ue06a41f7-195a-4676-bfe0-c12dd42545f&title=)


---

> 更改git路径：
> - git remote set-url origin newGitUrl
> 
GIT命令3.0：
> ![QQ图片20221201174618.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/29535083/1669888059472-710c6e16-bac3-420a-9928-81d79d1ffc97.jpeg#clientId=ufc5aa130-092f-4&crop=0&crop=0&crop=1&crop=1&from=ui&id=u7c790d0a&margin=%5Bobject%20Object%5D&name=QQ%E5%9B%BE%E7%89%8720221201174618.jpg&originHeight=1689&originWidth=1352&originalType=binary&ratio=1&rotation=0&showTitle=false&size=261399&status=done&style=none&taskId=ua6c586c6-bb41-4f02-98fc-19adad77462&title=)


---

> 在切换分支时，报错pathspec master did not match any file(s) known to git
> - 查看分支状况：
> 
      git branch -a
> - 获取所有分支：
> 
       git  fetch
> - 切换远程分支：
> 
       git checkout origin/master/main 

