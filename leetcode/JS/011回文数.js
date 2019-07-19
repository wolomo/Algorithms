/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    if(x<10) return true
    var k = []
    while(x%10>0){
        k.push(x%10)
        x=parseInt(x/10)
    }
    for(let i=0;i<k.length/2;i++){
        console.log(k[i],k[k.length-i-1])
        if(!(k[i]==k[k.length-i-1])){
            return false
        }
    }
    return true
};
console.log(isPalindrome(-125621))