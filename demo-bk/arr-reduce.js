/**
 * obj={ a1:{ a2:{ a3:'value' } } }
 * 通过遍历器obj.a1.a2.a3直接取到value值，如何取。
 * Array的reduce方法来实现
 * huanghui 20180528
 */
var obj = {
    a1 :{
        a2:{
            a3:'value'
        }
    }
};

//console.log(obj.a1.a2.a3,obj['a1']['a2']['a3']);//value vlaue
console.log(Fn(obj,'obj.a1.a2.a3')); //value

function Fn (obj,selector){
    var str = selector.substr(selector.indexOf('.')+1,selector.length);
    var arr = str.split('.');
    var val = arr.reduce(function(total,currentValue,currentIndex){
        return total[currentValue];    
    },obj);
    return val;
}


var  arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function(total,currentValue, currentIndex, array) {
    console.log(total,currentValue, currentIndex, array);
    return total + currentValue;
},1)
console.log(arr, sum);