//1全局声明的函数中的this，默认指向global
function getGlobal(){
    console.log(this)
}


//2.对象中函数中的this，取决于调用者
const test ={
     name:'sj',
     info:{
        ags:12,
        getAge(){
            console.log(this.name)
        }
     }
}


const inner={
    name:'sj',
    getGlobal
}


inner.getGlobal();

getGlobal()


//手动改变this
const utiSet={
    request:function(){
        console.log(this)
        console.log('网络请求')
    },
    computed:function(a,b){
        return a+b
    }
}

utilSet.request();



//apply,call
const obj={
    anomal:'dog'
}


function objTest(asg,masg2){
    console.log(this)
    console.log(masg,msg2)
}


const objTestBindToObj=objTest.bind(obj)
objTestBindToObj('aaa','sss')


objTest.apply(odj,['和','hu'])
objTest.call(obj,'和','hu')


utiSet.request.call(odj)//等价于obj.request


//bind