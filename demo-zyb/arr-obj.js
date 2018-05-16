/**
 * 对象数组 和 数组对象的转换。例如
 * var arr = [{'张三':[23,54,65,56]},{'李四':[98,87,87]}]转化为 
 * var obj = {
 *     [{'name':'张三','type':'23'},{'name':'张三','type':'54'}]
 * }
 * huanghui 20180510
 */
var str = [{'张三':'[23,54,65,56]'},{'李四':'[98,87,87]'},
    {'张三1':'[23,54,65,56]','李四2':'[98,87,87]'}]; 

(function(strArr){
    console.log("输入的数组："+JSON.stringify(strArr));
    var newArr =[];
    for (var i = 0 ,len = strArr.length; i < len; i++) {
        var obj = strArr[i];
        //console.log(obj);
        for(var item in obj){
            var itemArr = JSON.parse(obj[item]);//将类String转成Array
            //console.log(item,itemArr);
            for(var j=0, iLen = itemArr.length ;j<iLen ;j++){
                var newObj = {};
                newObj.name = item;
                newObj.type = itemArr[j].toString();
                newArr.push(newObj);
            }
        }
    }
    console.log("生成的Object对象:"+JSON.stringify(newArr));//将Object转成String显示。
    return newArr;//object对象
})(str);
