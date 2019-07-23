/**
 * 
 * 给定一个仅包含小写字母的字符串，去除字符串中重复的字母，
 * 使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let arr = []
    let arrr =[]
    let f = 0
    for(let i =0;i<s.length;i++){
        // console.log(s[i].charCodeAt()-97)
        arr[s[i].charCodeAt()-97]=1
    }

    for(let j =0;j<26;j++){
        if(arr[j]!=null){
            arrr[f] =String.fromCharCode((j+97));
            f++;
        }
    }
    console.log(arrr.join(""))
};

removeDuplicateLetters("cbacdcbc")