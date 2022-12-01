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
 