var arrlike = {1:'a',2:'b','3':'c','name':'d',length:6};

console.log(arrlike.length);
arrlike.type = 'e';
console.log(arrlike.length);

arrlike[6] = 'f';
//console.log(typeof(arrlike),arrlike);

console.log(Array.prototype.join.call(arrlike,'+'));

Array.join = Array.join || function(a,sep){
	return Array.prototype.join.call(a,sep);
}
console.log(Array.join(arrlike,'+'));

//判断是否为类数组
function isArrayLike(o){
	if(o && typeof(o) === 'object' &&
		isFinite(o.length) && o.length >0 &&
		o.length === Math.floor(o.length) && 
		o.length < 4294967296){
		return true;
	}else{
		return false;
	}
}
//console.log(isArrayLike(arrlike)); //true
//
var s = "Javascript";
console.log(Array.prototype.join.call(s,' '));
