/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i=0,j=1;
    let length = 0
    while(i<j){
        if(s[i]!=s[j]){
            console.log("i1,j:",i,j)
            j++   
            for(let m =i,n = j;m<n;m++){
                if(s[m]==s[j]){
                    length=length<j-i?j-i:length
                    i=j
                    j+=1
                }
            }
        }
        if(s[i]==s[j]){
            console.log("i2,j:",i,j)
            length=length<j-i?j-i:length
            j=i+2
            i=i+1
        }
        
        if(j==s.length){
            return length
        }
    }
};

console.log(lengthOfLongestSubstring("abcaabcbb"))
console.log(lengthOfLongestSubstring("bbbbb"))
console.log(lengthOfLongestSubstring("pwwkew"))