/**
 * 实现两个有序数组相加后，为一个有序数组。
 * var a = [0,0,1,3,5,7,9],
 *     b = [2,6,0,8,10]
 */
function arrChangeFn(aArr,bArr){
	console.log("输入的数组：",aArr,bArr);
	aArr.push.apply(aArr,bArr);//var newArr = aArr.concat(bArr); 数组合并
	aArr.sort(function(x,y){ //sort数组排序，默认为按字母排序。
		return x-y;
	});
	console.log("生成的新数组：",aArr)
	return aArr;
}


arrChangeFn([1,3,5,7,9 ],[2,6,8,10]);
arrChangeFn([3,6,7,8,12],[1,2,5,9,10]);