/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function longestPalindrome(s) {
    var leng =s.length
    var i = 0    
    while(leng>1){
        if(isHuiwen(s.substr(i,leng))){
            // return s.substr(i,leng)
            return leng
        }
        else{
            leng--
            i++
            for(let j=0; j<i;j++){
                if(isHuiwen(s.substr(j,leng))){
                    // return s.substr(j,leng)
                    return leng
                }
            }
        }
    }

};

function isHuiwen(s){
    var leng =s.length
    var i,j
    if((leng%2)==0){
        i=leng/2-1
        j=leng/2
    }else{
        i=j=(leng-1)/2
    }
    while(i>=0){
        if(s[i]==s[j]){
            i--
            j++
        }else{
            return false
        }
    }
    return true
}

console.log( longestPalindrome("sdasdasdasdasdsad"))