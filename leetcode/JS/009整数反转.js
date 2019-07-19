/**
 * 
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let s=''
    if(x>(Math.pow( 2,32 )-1)&&x<-(Math.pow( 2,32 )-1)){
        console.log(0)
    }else{
        console.log("222")
       if(x<0){
            s = String(x).slice(1).split("").reverse().join("")
            console.log(-Number(s))
       }else{
            s = String(x).split("").reverse().join("")
            console.log(Number(s))
       }
    }
    
};


reverse(Math.pow( 2,32 ))
reverse(-1231)
reverse(1231)