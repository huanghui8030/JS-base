/**
 * 实现两个有序数组相加后，为一个有序数组。
 * var a = [1,3,5,7,9],
 *     b = [2,6,8,10]
 */
function arrChangeFn(aArr,bArr){
	console.log("输入的数组：",aArr,bArr);
	for (var i = 0 ; i < aArr.length ; i++) {
		for (var j = 0; j < bArr.length; j++) {
			if(aArr[i] < bArr[j]){
				if(bArr[j] < aArr[i+1]){
					aArr.splice(i+1,0,bArr[j]);
					i = i+1
					break;
				}else if(i==aArr.length-1 && j === bArr.length-1){
					//console.log(i,j);
 					aArr.push(bArr[j]);
 					break;
				}
			}else if(i===0){
				aArr.splice(i,0,bArr[i]);
				i = i+1;
				break;
			}
		}
	}
	console.log("生成的新数组：",aArr);
	return aArr;
}

arrChangeFn([1,3,5,7,9 ],[2,6,8,10]);
arrChangeFn([3,6,7,8,12],[1,2,5,9,10]);