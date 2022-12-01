function parent(){
    this.name='sj'
    this.age=12
}

parent.protptypr.getMoney=function(){
    console.log('获取100元')
}
const chlid=new parent()
chlid.getMoney()


const simpleChild={}


//手动更改普通对象的_proto_指向
simpleChild._proto_=parent.prototype


simpleChild.getMoney()
console.log(simpleChild)




// golang
// 函数式 + 组合的方式

const annimal = {

}

function walk(annimal) {
    xxxxxx(annimal)
}