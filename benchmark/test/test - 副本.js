
var Benchmark = require('benchmark'),
    suite = new Benchmark.Suite;
var test1 = function(){
        var count = 10000,
            res = '';
            while(count--){
                res += 'a'
            }    
    };
var test2 = function(){
        var count = 10000,
            res = [];
            while(count--){
                res.push('a');
            }    
            res = res.join('');
    };
    // 添加测试
    suite.add('concat#test', function() {
        test1();
    }).add('jion#test', function() {
        test2();
    }).on('cycle', function(event) {
        console.log(String(event.target));// add listeners
    }).on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    }).run({ 'async': true });// run async




//bad
if (age > 20) {
    return true;
} else {
    return false;
}
//good
return age > 20;



//bad
var a = "aa";
var b = "bb";
var c = "cc";
var d;

//good
var a = "aa",
    b = "bb",
    c = "cc",
    d ;


for (var i = 0; i < document.images.length; i++) {
     document.images[i].src = "blank.gif";
 }


var imgs = document.images;
 for (var i = 0,len=imgs.length; i < imgs.length; i++) {　　
     imgs[i].src = "blank.gif";
 }



//bad
var obj = new Object();
obj.debug = false;
obj.lang = "en";

var arr = new Array("one", "two", "three");


//good
var obj = {debug: false, lang: "en"};
var arr = ["one", "two", "three"];


var arr = [1,2,3,4,5];
//bad
arr.push(6);
//good
arr[arr.length] = 6;

var arr = [1,2,3,4,5];
//bad
arr.unshift(0);
//good
[0].concat(arr);



var one = '1',numberOne = +one;


 //bad
 if (user.id === 10) {
     if (user.name !== "") {
         if (user.email === "email") {
             //do something...
         }
     }
 }

 //good
 if(user.id === 10 && user.name !=="" && user.email === "email") {
     //do something...
 }

 //good
 if (user.id !== 10) return;
 if (user.name === "") return;
 if (user.email !== "email") return;
 //do something...


//bad
if (color) {
    if(color === 'black') {
        printBlackBackground();
    }else if(color === 'red') {
        printRedBackground();
    }else if(color === 'blue') {
        printBlueBackground();
    }else if(color === 'green') {
        printGreenBackground();
    }else{
       printYellowBackground();
    }
}
       
//good
switch(color) {
    case 'black':
        printBlackBackground();
        break;
    case 'red':
        printRedBackground();
        break;
    case 'blue':
        printBlueBackground();
        break;
    case 'green':
        printGreenBackground();
        break;
    default:
        printYellowBackground();
}


var num = 0;
setTimeout('num++', 10);
//可以替换为：
var num = 0;
function addNum() {
    num++;
}
setTimeout(addNum, 10);


使用with关键字的目的是为了简化多次编写访问同一对象的工作，比如下面的例子：
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
这几行代码都是访问location对象中的属性，如果使用with关键字的话，可以简化代码如下：
with (location){
  var qs = search.substring(1);
  var hostName = hostname;
  var url = href;
}
