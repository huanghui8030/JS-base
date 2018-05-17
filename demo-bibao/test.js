function Person(str){
    var name = str || '内部参数';
    this.title = '我是标题' ;
    this.getName=function(){
        return name;
    };
    this.setName=function(value){
       name = value;
    };
}
var person = new Person(); 

console.log(person.getName()); //内部参数

console.log(new Person('自己定义了name').getName());//自己定义了name

person.setName('lwf');

console.log(person.getName());//'lwf'

console.log(new Person(),new Person().title);
