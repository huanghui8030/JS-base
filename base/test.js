//至少执行一次
function doWhile(){
    let i = 10;
    do{
        i += 2;
        console.log("i执行次数："+i);//先执行一次
    }while(i<10);
    console.log(i);//12
}
//doWhile();


function whileFn(){
    var j = 10 ;
    while( j<10 ){
        j += 2;
        console.log("j执行:"+j);//不执行
    }
    console.log(j);//10
}
//whileFn();

//用于枚举对象的属性
function forIn(){
    var obj = {'name':'张三','type':'1123'};
    for(var proName in obj) {
        console.log(proName);//name type
    }
}
//forIn();

//break 
function  breakFn(){
    var num = 0;
    for(var i =1 ; i<10 ; i++){
        if(i%5 === 0){
            break;//到了这里就跳出循环了，for中的循环都不执行了。
        }
        num ++;
    }
    console.log(num);//4
}
breakFn();

//continue
function continueFn(){
    var num = 0;
    for(var i =1 ; i<10 ; i++){
        if(i%5 === 0){
            continue; //只有当i=5的时候才跳出循环，然后继续执行下一个循环。
        }
        num ++;
    }
    console.log(num);//4
}
continueFn();