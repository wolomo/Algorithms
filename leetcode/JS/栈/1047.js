/**
 * 
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。

在 S 上反复执行重复项删除操作，直到无法继续删除。

在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * 
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = []
    for(let c of S){
        if(stack[stack.length-1]==c){
            stack.pop()
        }else{
            stack.push(c)
        }
    }
    return stack.join("")
};



var removeDuplicates2 = function(S) {
    let stack = []
    let k =0
    for(let c of S){
        if(stack[stack.length-1]==c){
            delete stack[stack.length-1]
            stack.length--
            // stack.pop()
        }else{
            stack[stack.length] =c
            // stack.push(c)
        }
    }
    return stack.join("")
};

console.log(removeDuplicates("aacssadassda"))