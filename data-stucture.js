//栈、队列、哈希表
const arr=[1,2,3,4,5]
const arr1=[[1,2,3],4,5]
const arr2=['1','2','3']
const arr3=[{name:'pjw'},{name:'xty'},{name:'哈哈哈'}]

//const stack=[]
//stack.push(1)
//stack.push(2)
//const stackToEle=stack.pop()
//console.log(stack,stackToEle,stack.length)

const Stack={
    capicity:[],
    size:function(){
        return this.capicity.length;
    },
    push:function(item){
        this.capicity.push(item)
    },
    pop:function(){
        return this.capicity.pop()
    }
}

console.log(Stack.capicity,Stack.pop(),Stack.size())


//队列
const Queue={
    capacity:[],
    size:function(){
        return this.capacity.length;
    },
    add(item){
        //从左边进入列队
        this.capacity.unshift(item)
    },
    remove(){
        return this.capacity.pop();
    }
}

Queue.add(1)
Queue.add(2)
Queue.add(3)

console.log(Queue.remove(),Queue.size(),Queue.capacity)



//1.队列从右边进入，从左边移除怎么实现
//2.有没有什么办法让别人无法取到capacity

//队列
const capacity=Symbol('capacity')
const Queue2={
    [capacity]:[],
    size:function(){
        return this[capacity].length;
    },
    add(item){
        this[capacity].unshift(item)
    },
    remove(){
        return this[capacity].pop();
    }
}
    
Queue.add('hhhhhh')
console.log(Queue2.remove)




//哈希表
//key-value pair
const hashMap=new Map();
hashMap.set('name','sj')
hashMap.set('color',{a:'red'})

console.log(hashMap.get('name'))
console.log(hashMap.get('color'))

//单一的value，set中的元素不会重复
const set=new Set([1,1,1,2,3,4,5,6])
//做基础数据类型的去重
console.log(set)
