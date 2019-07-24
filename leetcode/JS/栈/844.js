/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let s = getAnswer(S)
    let t = getAnswer(T)

    console.log(s,t)
    let max =Math.max(s.length,t.length)
    for(let j= 0;j<max;j++){
        if(s[j]!=t[j]){
            return false
        }
        return true
    }
};

function getAnswer(S){
    let stack =[]
    let i
    for(i=0;i<S.length;i++ ){
        if(S[i]=="#"){
            if(stack[0]){
                stack.pop()
            }
        }else{
            stack.push(S[i])
        }
    }
    return stack
}


let S = "ab##s"
let T = "c#d#"
console.log(backspaceCompare(S,T))