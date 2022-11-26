const user={
    name:'sj',
    age:3
}

//Object.freeze(user)

//错误用法
//    user={
//     name:'xyz'
//     }

    user.name='xyz'



//增
const prop='height'
user[prop]=1;
//user.height=1;
//user['height']=1;

//修改
user.name='空调'
user[prop]=4

//查询
const userName=user.name
console.log(userName)


//删除对象的属性
delete user.age

//引用类型
const config={
    acessKey:{
        key:'wqrfxcas'
    },
    secretKey:'qwertyuio',
}

 
//浅拷贝：引用指向问题
//const copyConfig=config;
//copyConfig.acessKey='1';

//深拷贝:单独复制一份
const  copyConfig={
   accessKey:config.acessKey,
   secretKey:config.secretKey
}

copyConfig.accessKey.key=1;
console.log(config)

// deepCopyObject(aimObject){
//     //递归遍历对象的属性值
// }

//JSON字符串
console.log(JSON.stringify(config))
//json方法深拷贝
//const jsonString=JSON.stringify(config)
const deepConfig=JSON.parse(jsonString)
deepConfig.accessKey.key=1;
console.log(deepConfig)
console.log(config)

//判断是否为对象
const easy={
    name:'sj'
}

console.log(typeof easy)
console.log(typeof 1)
console.log(typeof '1')
console.log(typeof true)
console.log(typeof undefined)
console.log(typeof null)

//解构语法
const bigObj={
    a:1,
    b:2,
    c:3,
    d:4
}

const{a:ttt,b,c,d}=bigObj
console.log(ttt,b,c,d)

// 简写
const name = 'pjw';
const self = {
    name, // 如果对象的key和value所使用的变量名相同，可直接简写
    age: '2'
}
console.log(self)


// 面向对象的思想
const people = {
    name: 'pjw',
    age: '23',
    university: 'ujs',
    sing: function() {
        console.log('我会唱歌')
    }
}

people.age
people.name
people.sing()
