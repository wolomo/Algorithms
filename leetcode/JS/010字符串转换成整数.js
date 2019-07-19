/**字符串转换成整数。
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var i=0,j=1;
    
    while(i<j&&j<str.length){
        if(isNum(str[i])&&isNum(str[j])){
            j++
        }
        if(isNum(str[i])&&!isNum(str[j])){
            return Number(str.slice(i,j))
        }
        if(!isNum(str[i])){
            i++;
            j++
        }
    }
    return null
};

var isNum = function(str) {
    var re = /^[-0-9]/;//
    if (!re.test(str)) {
        return false;
    }
    return true;

};

console.log(myAtoi("asdasd43-sdas"))