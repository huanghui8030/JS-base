/**
 * 实现：123456.9 ->  100,000.9
 * 思路：将Number类型转为String类型，通过split('.')方法将其分成为点号分离的一个数组。
 * 			数组中的第一个数，通过split(''),直接转成数组。然后数组反转。
 * 				数组反转后，将数组遍历，通过splice方法将每个第三个数组的位置加上一个“，”，
 * 					其中执行遍历的时候，需要将i进行加1，因为数组添加了一个逗号。
 * 				 	最后输出的数组是带有逗号的反转数组
 * 			   对将得到的数组进行reverse()方法进行反转。
 * 		    	在通过join('')方法，将数组转成字符串。
 * 		    最开始的数组如果长多2的话则说明有小数点，需要将上面得到的字符串添加“.”和第二个数组。
 * 		    最后得到了希望的结果
 * 		    
 * huanghui 20180509
 */
function b(num){
	console.log("输入的数字："+num);
	var str = new String(num); //必须转成String类型，否则不能使用。
	var dotArr = str.split('.');//dotArr[0]='123456',dotArr[1]='9'
	var beforeArr = dotArr[0].split('');//['1','2','3','4','5','6']
	var fArr = beforeArr.reverse();//['6','5','4','3','2','1']
	for (var i = 3; i < fArr.length; i=i+3 ) {
		fArr.splice(i, 0,',');
		i = i+1 ;
	}
	//console.log(fArr); //['6','5','4',',','3','2','1']
	var strArr = fArr.reverse() // ['1','2','3',',','4','5','6']
	var newStr = fArr.join('');//'123,456'
	if(dotArr.length==2){
		newStr = newStr +'.'+ dotArr[1];
	}
	console.log("生成的字符串："+newStr);
	return newStr;
}
b(1233344345601.922);
b(232323230.23);


//简化后的方法
/**
 * 大数据转换，添加千位分隔符（逗号）
 * @param  {Number} num 输入数字
 * @return {String} 返回带有逗号的字符串
 * huanghui 20180511
 */
function changeNum(num){
    var dotArr = (new String(num)).split('.'),
        fArr = dotArr[0].split('').reverse(),
        newStr = '';
    for (var i = 3; i < fArr.length; i=i+3 ) {
        fArr.splice(i, 0,',');
        i = i+1 ;
    }
    fArr.reverse();
    newStr = fArr.join('');
    if(dotArr.length==2){
        newStr = newStr +'.'+ dotArr[1];
    }
    return newStr;
}